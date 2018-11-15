package com.common.resource.provider;

import com.common.resource.ResourceDefaultFormat;
import com.common.resource.annotation.Id;
import com.common.resource.annotation.Resources;
import com.common.resource.data.ResourceDataObject;
import com.common.resource.read.ReadManager;
import com.common.resource.type.ResourceType;
import com.common.util.ReflectUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.core.PriorityOrdered;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.core.type.classreading.CachingMetadataReaderFactory;
import org.springframework.core.type.classreading.MetadataReader;
import org.springframework.core.type.classreading.MetadataReaderFactory;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
//@DependsOn(value = "readManager")
public class StaticResourceProviderManager implements ApplicationContextAware,  PriorityOrdered, BeanPostProcessor, InitializingBean {
    Logger logger=LoggerFactory.getLogger(StaticResourceProviderManager.class);

    private String path;
    private String suffix;
    private ResourceType resourceType;
    private String scanPackage;

    private ApplicationContext applicationContext;

    @Override
    public void afterPropertiesSet(){
        //必须要确保ReadManager中的map集合初始化，否则调用reload获取到的ReadResource为null
        ReadManager readManager=applicationContext.getBean(ReadManager.class);
        readManager.init();
        /**
         * 基本想法：
         *   通过反射获取到resourceDataObject的Field对象，然后再给对象的改字段赋值
         * findField(..):
         *  根据类型，字段名称和字段类型查询一个字段；该方法会遍历的向父类查询字段，查询到的是所有字段；
         *  StaticResourceProvider中有ResourceDataObject字段
         *
         */
        //设置资源的默认格式
        ResourceDefaultFormat resourceDefaultFormat=new ResourceDefaultFormat(path,suffix,resourceType);
        Field resourceDataObjectField=ReflectionUtils.findField(StaticResourceProvider.class,"resourceDataObject");
        resourceDataObjectField.setAccessible(true);

        //遍历所有的资源产生器，给resourceDataObject字段赋值
        /**
         * 获取AbstractResourceProvider类型的所有bean,包括其所有实现类
         * 可以根据application.getBeansOfType(..)获取
         */
        Map<String,ResourceProvider> map=applicationContext.getBeansOfType(ResourceProvider.class);
        Set<Class> classes=new HashSet<>();
        //创建一个可重用固定线程数的线程池，将任务添加到线程池执行
        /**如何合理设置线程池线程大小(N为CPU总核数):
         *    如果是CPU密集型应用，则线程池大小设置为N+1:Runtime.getRuntime().availableProcessors() + 1
         *    如果是IO密集型应用，则线程池大小设置为2N+1
         */
        ExecutorService service=Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors() + 1);
        for(ResourceProvider resourceProvider:map.values()) {
            /**
             * 获取每个资源产生器的泛型参数(参数为资源类)
             * 根据参数可以创建ResourceDataObject
             */
            //利用反射
            //获取静态资源产生器的第一个泛型参数类型(第一个参数类型为资源类对象)
            Class<?> genericType = ReflectUtil.getGenericType(resourceProvider.getClass());
            //当资源产生器泛型参数为具体值时，可以对资源进行注入了
            if (genericType != null) {
                classes.add(genericType);
                //往StaticResourceProvider注入ResourceMetaData字段
                //此时ResourceDataObject是有resourceClass的了，所以可以进行初始化各种路径什么的
                injectResourceDataObject(resourceProvider, resourceDataObjectField, genericType, resourceDefaultFormat);
                //往线程池提交任务
                //resourceProvider::reload等价于abstractResourceProvider->abstractResourceProvider.reload()
                //执行改方法会将读取所有静态资源并添加进map集合
                //这里还需要注意一个顺序问题：要让ReadManager中的map集合先赋值，不然这里调用reload时ReadResource为null
                service.submit(() -> resourceProvider.reload());
            }
        }

        /**
         * PathMatchingResourcePatternResolver可以用来解析资源文件，
         * 主要是用来解析类路径下的资源文件。当然它也可以用来解析其它
         * 资源文件，如基于文件系统的本地资源文件。
         */
        ResourcePatternResolver resourcePatternResolver=new PathMatchingResourcePatternResolver();
        MetadataReaderFactory readerFactory = new CachingMetadataReaderFactory(resourcePatternResolver);

        Resource[] resources=null;
        try{
            resources=resourcePatternResolver.getResources(scanPackage.replaceAll("\\.","/")+"/*.class");
            for(Resource resource:resources){
                if(resource.isReadable()){
                    MetadataReader reader = readerFactory.getMetadataReader(resource);
                    //扫描到的class
                    String className = reader.getClassMetadata().getClassName();
                    Class<?> resourceClass = Class.forName(className);
                    //当set集合中包含改资源类说明上面已经进行过字段注入
                    if(classes.contains(resourceClass)){
                        continue;
                    }
                    if(resourceClass.getAnnotation(Resources.class)==null){
                        continue;
                    }
                    //判断资源类是否有id字段
                    Class keyClass=null;
                    Field[] fields=resourceClass.getDeclaredFields();
                    for(Field field:fields){
                        if(field.getAnnotation(Id.class)!=null){
                            keyClass=field.getType();
                            break;
                        }
                    }
                    if(keyClass==null){
                        throw new RuntimeException(String.format("资源类%s缺少@id注解的主键",resourceClass.getSimpleName()));
                    }

                    //往ResourceProvider注入ResourceDataObject字段
                    //由于资源类产生器的泛型参数为空，所有不能够完成resourceDataObject字段注入,而需重新创造一个provider
                    //以下通过动态创建类来获取
                    ResourceProvider resourceProviderProxy=ResourceProviderProxyFactory.getInstance().createResourceProviderProxy(StaticResourceProvider.class.getName(),resourceClass,ReflectUtil.convertType(keyClass));
                    injectResourceDataObject(resourceProviderProxy,resourceDataObjectField,resourceClass,resourceDefaultFormat);
                    //将创建的类注册进sprig容器中
                    DefaultListableBeanFactory beanFactory = (DefaultListableBeanFactory)applicationContext.getAutowireCapableBeanFactory();
                    beanFactory.registerSingleton(resourceProviderProxy.getClass().getName(),resourceProviderProxy);
                    //往线程池提交任务
                    service.submit(()->resourceProviderProxy.reload());
                }
            }
        }catch (Exception e){
            logger.error("资源读取失败...");
            e.printStackTrace();
        }
        // 等待任务执行完毕后关闭线程池。
        service.shutdown();
        boolean flag=false;
        do {
            try {
                flag = service.awaitTermination(2000, TimeUnit.MILLISECONDS);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }while(!flag);
    }

    public void injectResourceDataObject(ResourceProvider provider, Field resourceDataObjectField, Class resourceClass, ResourceDefaultFormat resourceDefaultFormat){
        ResourceDataObject resourceDataObject=ResourceDataObject.valueOf(resourceClass,resourceDefaultFormat);
        try{
            //往ResourceProvider注入ResourceMetaData字段
            resourceDataObjectField.set(provider,resourceDataObject);
        }catch (Exception e){
            logger.error(String.format("%s类，%s字段注入失败..",provider.getClass().getSimpleName(),resourceDataObject.getClass().getSimpleName()));
            e.printStackTrace();
        }

    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getSuffix() {
        return suffix;
    }

    public void setSuffix(String suffix) {
        this.suffix = suffix;
    }

    public ResourceType getResourceType() {
        return resourceType;
    }

    public void setResourceType(ResourceType resourceType) {
        this.resourceType = resourceType;
    }

    public String getScanPackage() {
        return scanPackage;
    }

    public void setScanPackage(String scanPackage) {
        this.scanPackage = scanPackage;
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext=applicationContext;
    }

    @Override
    public int getOrder() {
        return PriorityOrdered.LOWEST_PRECEDENCE-2;
    }
}
