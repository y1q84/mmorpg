package com.module.logic.goods.entity;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.TypeReference;
import org.apache.commons.collections.MapUtils;
import org.junit.Test;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.*;

public class PlayerGoodsEntityTest {

    //将json字符串数组转成list集合，集合中的参数为对象
    @Test
    public void test1(){
        String str="[{'id':1,'name':'zhangsan'},{'id':2,'name':'lisi'}]";
        Map<Integer,Student> id2Student=new HashMap<>();
        //序列化
        List<Student> list=JSON.parseObject(str,new TypeReference<List<Student>>(){});
        list.forEach((k)->{
            System.out.println("id:"+k.getId()+"\t\t,name:"+k.getName());
            id2Student.put(k.getId(),k);
        });
        //反序列化
        id2Student.put(3,new Student(3,"guanyu"));
        str=JSON.toJSONString(id2Student.values());
        System.out.println("添加之后的字符串："+str);
    }

    @Test
    public void test2(){
        String jsonData = "{id:100,list:[{a:1},{a:2}]";
        Map<String, Object> map = JSON.parseObject(jsonData,new TypeReference<Map<String, Object>>(){});
        System.out.println(map);
        Integer id = MapUtils.getInteger(map, "id");
        Object list = MapUtils.getObject(map, "list");
        List<JSONObject> ll = (List)list;
        for (JSONObject s : ll) {
            String eleVal = s.get("a").toString();
            System.out.println(s+"---a的值是："+eleVal);
        }

    }
}