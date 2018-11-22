package com.other.ExecuteTest;

import com.common.resource.provider.StaticResourceProvider;
import org.junit.Test;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;


public class Demo {

    @Test
    public void demo(){
        ExecutorService executorService = Executors.newFixedThreadPool(1);
        executorService.submit(new Runnable() {
            @Override
            public void run() {
                System.out.println("哈哈哈哈");
            }
        });
        System.out.println("后面还执行吗》》》");
        String className=StaticResourceProvider.class.getName();
        System.out.println("静态资源代理类："+ className);
        className.replaceAll("\\.","/");
        System.out.println("转换之后："+className);
    }

}
