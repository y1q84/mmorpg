package com.common.resource.read;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.common.resource.data.ResourceDataObject;
import com.common.resource.type.ResourceType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class ReadJson implements ReadResource {

    Logger logger=LoggerFactory.getLogger(ReadJson.class);

    @Override
    public <T> List<T> read(ResourceDataObject resourceDataObject) {
        Resource[] resources = resourceDataObject.getResources();
        Map map=new HashMap();
        List<T> list=null;
        for(Resource resource:resources){
            String content=null;
            try{
                ByteArrayOutputStream outputStream=new ByteArrayOutputStream();
                InputStream inputStream=resource.getInputStream();
                byte[] bytes=new byte[1024];
                int index=0;
                while((index=inputStream.read(bytes))!=-1){
                    outputStream.write(bytes,0,index);
                }
                //读取文件内容
                content=outputStream.toString();
//                System.out.println("资源类为："+resourceDataObject.getResourceClass()+"等否？"+Staff.class);
                Class clazz=resourceDataObject.getResourceClass();
                Type type = new TypeReference<List<T>>(resourceDataObject.getResourceClass()) {}.getType();
                list = JSON.parseObject(content, type);

            }catch (Exception e){
                logger.error(String.format("读取json文件%s出错...",resourceDataObject.getTotalPath()));
                e.printStackTrace();
            }
        }
        return list;
    }

    @Override
    public ResourceType getResourceType() {
        return ResourceType.JSON;
    }

//    public <T, E> MapInstance<T,E> read2(ResourceDataObject resourceDataObject) {
//        Resource[] resources = resourceDataObject.getResources();
//        MapInstance<T,E> map=new HashMap<>();
//        for(Resource resource:resources){
//            String content=null;
//            try{
//                ByteArrayOutputStream outputStream=new ByteArrayOutputStream();
//                InputStream inputStream=resource.getInputStream();
//                byte[] bytes=new byte[1024];
//                int index=0;
//                while((index=inputStream.read(bytes))!=-1){
//                    outputStream.write(bytes,0,index);
//                }
//                //读取文件内容
//                content=outputStream.toString();
//                Type type = new TypeReference<MapInstance<T,E>>(Integer.class,resourceDataObject.getResourceClass()) {}.getType();
//                map=JSON.parseObject(content,type);
//            }catch (Exception e){
//                logger.error("json文件读取出错...");
//                e.printStackTrace();
//            }
//        }
//        return map;
//    }

//    final static Type type = new TypeReference<List<Staff>>() {}.getType();


}
