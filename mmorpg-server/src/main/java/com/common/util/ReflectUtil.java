package com.common.util;

import org.springframework.core.ResolvableType;

public class ReflectUtil {
    /**
     * ResolvableType为所有的java类型提供了统一的数据结构以及API
     *      ，换句话说，一个ResolvableType对象就对应着一种java类型。
     *      我们可以通过ResolvableType对象获取类型携带的信息
     *      （举例如下）：
     *      1.getSuperType()：获取直接父类型
     *      2.getInterfaces()：获取接口类型
     *      3.getGeneric(int...)：获取类型携带的泛型类型
     *      4.resolve()：Type对象到Class对象的转换
     *
     *      另外，ResolvableType的构造方法全部为私有的，我们不能直接new，只能使用其提供的静态方法进行类型获取：
     *      1.forField(Field)：获取指定字段的类型
     *      2.forMethodParameter(Method, int)：获取指定方法的指定形参的类型
     *      3.forMethodReturnType(Method)：获取指定方法的返回值的类型
     *      4.forClass(Class)：直接封装指定的类型
     */
    public static Class<?> getGenericType(Class clazz){
        Class<?> genericType=getSuperGenericType(clazz);
        if(genericType==null){
            genericType=getInterfaceGenericType(clazz);
        }
        return genericType;
    }

    public static Class<?> getSuperGenericType(Class clazz){
        ResolvableType resolvableType=ResolvableType.forClass(clazz);
        //获取父类的第一个泛型参数的类型
        //resolve将Type类型转为Class类型
        //如 public class Cat extends Animal<String,Long> {}
        //结果应为：java.lang.String
        return resolvableType.getSuperType().getGeneric(0).resolve();
    }

    public static Class<?> getInterfaceGenericType(Class clazz){
        ResolvableType resolvableType=ResolvableType.forClass(clazz);
        //获取一个接口的泛型类型
        return resolvableType.getInterfaces()[0].getGeneric(0).resolve();
    }
}
