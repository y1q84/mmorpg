package com.common.resource.provider;

import com.common.resource.ResourceDefaultFormat;
import com.common.resource.data.ResourceDataObject;
import com.common.resource.type.ResourceType;
import com.common.util.ReflectUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.stereotype.Component;
import org.springframework.util.ReflectionUtils;

import javax.annotation.PostConstruct;
import java.lang.reflect.Field;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Component
public class StaticResourceProviderManager implements ApplicationContextAware {
    Logger logger=LoggerFactory.getLogger(StaticResourceProviderManager.class);

    private String path;
    private String suffix;
    private ResourceType resourceType;
    private String scanPackage;

    private ApplicationContext applicationContext;

    @PostConstruct
    public void init(){
        //设置资源的默认格式
        ResourceDefaultFormat resourceDefaultFormat=new ResourceDefaultFormat(path,suffix,resourceType);
        /**
         * 基本想法：
         *   通过反射获取到resourceDataObject的Field对象，然后再给对象的改字段赋值
         * findField(..):
         *  根据类型，字段名称和字段类型查询一个字段；该方法会遍历的向父类查询字段，查询到的是所有字段；
         *  StaticResourceProvider中有ResourceDataObject字段
         *
         */
        Field resourceDataObjectField=ReflectionUtils.findField(StaticResourceProvider.class,"resourceDataObject");
        resourceDataObjectField.setAccessible(true);

        //遍历所有的资源产生器，给resourceDataObject字段赋值
        /**
         * 获取AbstractResourceProvider类型的所有bean,包括其所有实现类
         * 可以根据application.getBeansOfType(..)获取
         */
        Map<String,AbstractResourceProvider> map=applicationContext.getBeansOfType(AbstractResourceProvider.class);
        Set<Class> classes=new HashSet<>();
        //创建一个可重用固定线程数的线程池，将任务添加到线程池执行
        /**如何合理设置线程池线程大小(N为CPU总核数):
         *    如果是CPU密集型应用，则线程池大小设置为N+1:Runtime.getRuntime().availableProcessors() + 1
         *    如果是IO密集型应用，则线程池大小设置为2N+1
         */
        ExecutorService service=Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors() + 1);
        for(AbstractResourceProvider abstractResourceProvider:map.values()){
            /**
             * 获取每个资源产生器的泛型参数(参数为资源类)
             * 根据参数可以创建ResourceDataObject
             */
            //利用反射
            //获取静态资源产生器的第一个泛型参数类型(第一个参数类型为资源类对象)
            Class<?> genericType=ReflectUtil.getGenericType(abstractResourceProvider.getClass());
            //当资源产生器泛型参数为具体值时，可以对资源进行注入了
            if(genericType!=null){
                classes.add(genericType);
                //往StaticResourceProvider注入ResourceMetaData字段
                //此时ResourceDataObject是有resourceClass的了，所以可以进行初始化各种路径什么的
                injectResourceDataObject(abstractResourceProvider,resourceDataObjectField,genericType,resourceDefaultFormat);
                //往线程池提交任务
                //resourceProvider::reload等价于abstractResourceProvider->abstractResourceProvider.reload()
                //执行改方法会将读取所有静态资源并添加进map集合
                service.submit(()->abstractResourceProvider.reload());
            }

            /**
             * PathMatchingResourcePatternResolver可以用来解析资源文件，
             * 主要是用来解析类路径下的资源文件。当然它也可以用来解析其它
             * 资源文件，如基于文件系统的本地资源文件。
             */
            PathMatchingResourcePatternResolver pmrps=new PathMatchingResourcePatternResolver();
            Resource[] resources=null;
            try{
                pmrps.getResources(scanPackage.replaceAll("\\.","/")+"/*.class");
            }catch (Exception e){
                logger.error("资源读取失败...");
                e.printStackTrace();
            }
        }
    }

    public void injectResourceDataObject(AbstractResourceProvider provider, Field resourceDataObjectField, Class resourceClass, ResourceDefaultFormat resourceDefaultFormat){
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

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext=applicationContext;
    }
}
