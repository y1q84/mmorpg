package com.common.persist;

import com.common.resource.provider.ResourceProviderProxyFactory;
import com.common.util.ReflectUtil;
import com.google.common.base.Strings;
import org.apache.commons.lang.StringUtils;
import org.hibernate.boot.MetadataSources;
import org.hibernate.metamodel.internal.EntityTypeImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.beans.factory.config.InstantiationAwareBeanPostProcessor;
import org.springframework.context.ApplicationContext;
import org.springframework.core.Ordered;
import org.springframework.core.PriorityOrdered;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.orm.hibernate5.support.HibernateDaoSupport;

import java.io.IOException;
import java.util.Collection;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class EntityProviderSessionFactoryBean extends LocalSessionFactoryBean implements InstantiationAwareBeanPostProcessor, PriorityOrdered {
    Logger logger=LoggerFactory.getLogger(EntityProviderSessionFactoryBean.class);

    private ConfigurableListableBeanFactory beanFactory;

    @Override
    public void afterPropertiesSet() throws IOException {
        super.afterPropertiesSet();
        Map<String, EntityProvider> map= beanFactory.getBeansOfType(EntityProvider.class);
        Set<Class> classes=new HashSet<>();
        for(EntityProvider entityProvider:map.values()){
            Class<?> genericType= ReflectUtil.getGenericType(entityProvider.getClass());
            if(genericType!=null){
                classes.add(genericType);
            }
        }
        //即通过XML配置或标注，初始化Entity模型及其与数据库的映射
        MetadataSources metadataSources=getMetadataSources();
        Collection<Class<?>> entities= metadataSources.getAnnotatedClasses();
        for(Class<?> clazz:entities){
            if(classes.contains(clazz)){
                continue;
            }
            Object o=null;
            Class<?> genericType  =ReflectUtil.getGenericType(clazz);
            if(genericType==null){
                logger.error(String.format("类%s没有继承%s接口，或者没有添加泛型",clazz.getSimpleName(),IEntity.class.getSimpleName()));
                return ;
            }
            //生成代理类
            o=ResourceProviderProxyFactory.getInstance().createEntityProviderProxy(CacheEntityProvider.class.getName(),clazz,genericType);
            if(o!=null){
                if(o instanceof HibernateDaoSupport){
                    //设置sessionFactory,初始化HibernateTemplate
                    ((HibernateDaoSupport)o).setSessionFactory(getObject());
                }
                //将生成的代理类注册进spring容器
                this.beanFactory.registerSingleton(o.getClass().getName(),o);
            }
        }
    }

    @Override
    public void setBeanFactory(BeanFactory beanFactory) {
        super.setBeanFactory(beanFactory);
        this.beanFactory= (ConfigurableListableBeanFactory) beanFactory;
    }

    @Override
    public int getOrder() {
        return Ordered.LOWEST_PRECEDENCE-3;
    }
}
