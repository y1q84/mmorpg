package com.common.resource.read;

import com.common.resource.data.ResourceDataObject;
import com.common.resource.type.ResourceType;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class ReadManager implements BeanFactoryAware {//ApplicationContextAware

    private ConfigurableListableBeanFactory beanFactory;
//    private ApplicationContext applicationContext;
    private Map<ResourceType,ReadResource> type2Resource=new HashMap<>();
    private static ReadManager readManager;

    @PostConstruct
    public void init(){
        readManager=this;
        Map<String,ReadResource> map=beanFactory.getBeansOfType(ReadResource.class);
        map.forEach((str,reader)->{
           type2Resource.put(reader.getResourceType(),reader);
        });
//        valueOf();
    }

    public static ReadManager valueOf(){
        return readManager;
    }

    public ReadResource getReadResource(ResourceType type){
        return type2Resource.get(type);
    }

    public <T> List<T> read(ResourceDataObject resourceDataObject){
        ReadResource readResource=getReadResource(resourceDataObject.getResourceType());
        return readResource.read(resourceDataObject);
    }

//    @Override
//    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
//        System.out.println("调用了...");
//        this.applicationContext=applicationContext;
//    }

    public static void main(String[] args) {
        ApplicationContext context=new ClassPathXmlApplicationContext("applicationContext.xml");
        ReadManager manager=context.getBean(ReadManager.class);
    }

    @Override
    public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
        this.beanFactory=(ConfigurableListableBeanFactory)beanFactory;
    }
}
