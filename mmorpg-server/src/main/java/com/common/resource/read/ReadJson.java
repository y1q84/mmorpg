package com.common.resource.read;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.common.resource.data.ResourceDataObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

public class ReadJson implements ReadResource {

    Logger logger=LoggerFactory.getLogger(ReadJson.class);

    @Override
    public String getSuffix() {
        return ".json";
    }

    @Override
    public Map read(ResourceDataObject resourceDataObject) {
        Resource[] resources = resourceDataObject.getResources();
        Map map=new HashMap();
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
                map=JSON.parseObject(content,new TypeReference<Map>(){

                });
            }catch (Exception e){
                logger.error("json文件读取出错...");
                e.printStackTrace();
            }
        }
        return map;
    }

}
