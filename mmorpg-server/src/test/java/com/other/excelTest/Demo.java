package com.other.excelTest;

import org.junit.Test;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

public class Demo{

    @Test
    public void test1(){

        Class<?> clazz=Son.class;
        Type genericInterfaces = Son.class.getGenericInterfaces()[0];
        ParameterizedType genericInterface;
        genericInterface = (ParameterizedType)(genericInterfaces);
        System.out.println(genericInterface.getActualTypeArguments()[0]);
    }
}
