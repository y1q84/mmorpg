package com.common.resource;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.util.List;

public class ReadJson implements ReadResource {

    @Override
    public String getSuffix() {
        return ".json";
    }

    @Override
    public <E> List<E> read(InputStream inptStream, Class<E> clazz) {
        String content=null;
        List<E> list=null;
       try{
           ByteArrayOutputStream outputStream=new ByteArrayOutputStream();
           byte[] bytes=new byte[1024];
           int index=0;
           while((index=inptStream.read(bytes))!=-1){
               outputStream.write(bytes,0,index);
           }
           content=outputStream.toString();
           list= JSON.parseObject(content,new TypeReference<List<E>>(clazz){});
               return null;
       }catch (Exception e){
           throw new RuntimeException(String.format("Json数据读取出错..."));
       }
    }
}
