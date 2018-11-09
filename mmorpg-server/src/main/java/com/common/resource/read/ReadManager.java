package com.common.resource.read;

import com.common.resource.data.ResourceDataObject;
import com.common.resource.type.ResourceType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class ReadManager implements ApplicationContextAware {
    Logger logger=LoggerFactory.getLogger(ReadManager.class);

    private ApplicationContext applicationContext;
    private Map<ResourceType,ReadResource> type2Resource=new HashMap<>();
    private static ReadManager readManager;

    public void init(){
        readManager=this;
        Map<String,ReadResource> map=applicationContext.getBeansOfType(ReadResource.class);
        map.forEach((str,reader)->{
            type2Resource.put(reader.getResourceType(),reader);
        });
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

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext=applicationContext;
    }

}
