package com.other.jsonTest;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import org.junit.Test;

import java.util.Map;

public class Demo {
    public static <K, V> Map<K, V> parseToMap(String json, Class<K> keyType, Class<V> valueType) {
        return JSON.parseObject(json, new TypeReference<Map<K, V>>(keyType, valueType) {});
    }

    @Test
    public void demo(){
        // 可以这样使用
        String json="{name:\"里斯\",sex:\"男\"}";
        Map<String,String> map=parseToMap(json,String.class,String.class);
        System.out.println(map.size());
        for(Map.Entry<String ,String> entry:map.entrySet()){
            System.out.println("key:"+entry.getKey()+",\tvalue:"+entry.getValue());
        }
    }
}
