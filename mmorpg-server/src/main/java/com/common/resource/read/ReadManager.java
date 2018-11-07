package com.common.resource.read;

import com.common.resource.data.ResourceDataObject;
import com.common.resource.type.ResourceType;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class ReadManager implements ApplicationContextAware {

    private ApplicationContext applicationContext;
    private Map<ResourceType,ReadResource> type2Resource=new HashMap<>();

    @PostConstruct
    public void init(){
        Map<String,ReadResource> map=applicationContext.getBeansOfType(ReadResource.class);
        map.forEach((str,reader)->{
           type2Resource.put(reader.getResourceType(),reader);
        });
        valueOf();
    }

    public static ReadManager valueOf(){
        return new ReadManager();
    }

    public ReadResource getReadResource(ResourceType type){
        return type2Resource.get(type);
    }

    public <T> List<T> read(ResourceDataObject resourceDataObject){
        ReadResource readResource=getReadResource(resourceDataObject.getResourceType());
        return readResource.read(resourceDataObject);
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        System.out.println("调用了...");
        this.applicationContext=applicationContext;
    }

    public static void main(String[] args) {
        ApplicationContext context=new ClassPathXmlApplicationContext("applicationContext.xml");
        ReadManager manager=context.getBean(ReadManager.class);
    }
}
