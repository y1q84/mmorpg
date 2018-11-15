package com.common.resource.provider;


import jdk.internal.org.objectweb.asm.Opcodes;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.asm.ClassWriter;
import org.springframework.asm.MethodVisitor;

import static jdk.internal.org.objectweb.asm.Opcodes.ACC_PUBLIC;

/**
 * 使用ASM动态生成class文件
 * 可参考博客链接：https://blog.csdn.net/zhangjg_blog/article/details/22976929
 */
public class ResourceProviderProxyFactory extends ClassLoader {

    Logger logger=LoggerFactory.getLogger(ResourceProviderProxyFactory.class);

    private static ResourceProviderProxyFactory resourceProviderProxyFactory;

    /**
     * 私有化构造方法，只能通过getInstance创建
     */
    private ResourceProviderProxyFactory(){

    }

    public static ResourceProviderProxyFactory getInstance(){
        if(resourceProviderProxyFactory==null){
            synchronized (ResourceProviderProxyFactory.class){
                if(resourceProviderProxyFactory==null){
                    resourceProviderProxyFactory=new ResourceProviderProxyFactory();
                }
            }
        }
        return resourceProviderProxyFactory;
    }

    public ResourceProvider createResourceProviderProxy(String superProviderName, Class genericType1,Class genericType2){
        Class<?> clazz=createGenericClass(superProviderName,genericType1,genericType2);
        ResourceProvider resourceProvider=null;
        try {
            resourceProvider=(ResourceProvider)(clazz.newInstance());
        }catch (Exception e){
            logger.error("类%s实例化失败..",resourceProvider.getClass().getSimpleName());
            e.printStackTrace();
        }
        return resourceProvider;
    }

    //创建泛型类，其中第二个参数为泛型参数类型,第三个表示id
    public Class<?> createGenericClass(String superProviderName, Class genericType1,Class genericType2){
        String superClassName=superProviderName.replaceAll("\\.","/");
        System.out.println("父类名："+superClassName);
        //所创建类的类名
        String className=superClassName+genericType1.getSimpleName()+genericType2.getSimpleName()+"Proxy";
        System.out.println("子类名："+className);
        String genericClassName=String.format("L%s<L%s;L%s;>;",superClassName,genericType1.getName().replaceAll("\\.","/"),genericType2.getName().replaceAll("\\.","/"));
        System.out.println("带泛型的父类名"+genericClassName);
        //开始匹配类部分
        ClassWriter classWriter=new ClassWriter(0);
        //定义一个类
        //参数1：指定jdk版本，参数2：指定这个类为public
        //参数3：表示类的全限定名称
        //参数4：位置变量定义的是泛型签名，
        //参数5：这个类的父类
        //参数6：null位子的变量定义的是这个类实现的接口
        classWriter.visit(
                Opcodes.V1_8,
                ACC_PUBLIC,
                className,
                genericClassName,
                superClassName,
                null
                );
        //定义构造方法
        MethodVisitor mv=classWriter.visitMethod(ACC_PUBLIC,"<init>","()V",null,null);
        //生成构造方法的字节码指令
        mv.visitCode();
        mv.visitVarInsn(Opcodes.ALOAD, 0);
        mv.visitMethodInsn(Opcodes.INVOKESPECIAL,superClassName,"<init>","()V",false);
        mv.visitInsn(Opcodes.RETURN);
        mv.visitMaxs(1,1);
        mv.visitEnd();
        //将classWriter转成字节数组
        byte[] bytes=classWriter.toByteArray();
        /**
         * defineClass（）；
         * 是将你定义的字节码文件经过字节数组流解密之后，
         * 将该字节流数组生成字节码文件，也就是该类的 文件的类名.class，
         */
        return defineClass(className.replaceAll("/","\\."),bytes,0,bytes.length);
    }


//    public static void main(String[] args) {
//        ResourceProviderProxyFactory rppf=new ResourceProviderProxyFactory();
//        ResourceProvider resourceProvider=rppf.createResourceProviderProxy(StaticResourceProvider.class.getName(),java.lang.String.class);
//        ResolvableType resolvableType=ResolvableType.forClass(resourceProvider.getClass());
//        System.out.println("类："+resourceProvider);
//        System.out.println(resolvableType.getSuperType().getGeneric(0).resolve());
//    }
}
