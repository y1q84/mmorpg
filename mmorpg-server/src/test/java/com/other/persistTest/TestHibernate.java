package com.other.persistTest;

import com.common.persist.HibernateEntityProvider;
import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.module.logic.player.vo.user.Person;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.Date;
import java.util.concurrent.TimeUnit;

public class TestHibernate {
    @Test
    public void test2(){
        ApplicationContext ac=new ClassPathXmlApplicationContext("classpath*:applicationContext.xml");
        HibernateEntityProvider<Person,Long> hep=ac.getBean(HibernateEntityProvider.class);
        Person p = new Person();
        p.setName("wushanqi");
        p.setAge(22);
        p.setBirth(new Date());
        hep.save(p);
    }

    @Test
    public void test(){
        /**
         * Cache的get方法有两个参数，第一个参数是要从Cache中获取记录的key，
         * 第二个记录是一个Callable对象。当缓存中已经存在key对应的记录时，
         * get方法直接返回key对应的记录。如果缓存中不包含key对应的记录，
         * Guava会启动一个线程执行Callable对象中的call方法，
         * call方法的返回值会作为key对应的记录值被存储到缓存中，并且被get方法返回
         */
        Cache<Integer,String> cache= Caffeine.newBuilder()
                .maximumSize(10_000)
                .expireAfterWrite(10, TimeUnit.MINUTES)
                .build();
        String value=cache.get(1,i->getValue(i));
        System.out.println("有值返回🐎"+value);
        value=cache.getIfPresent(1);
        System.out.println("第二次获取值:"+value);
        //调用get方法如果1对应的记录有值则直接返回，不调用第二参数的方法
        String v=cache.get(1,i->getValue(i));
        System.out.println("这次还调用回调方法🐎？"+v);
        //添加值
        cache.put(1,"张三");
        System.out.println("修改后的值为："+cache.getIfPresent(1));
        //删除值
        cache.invalidate(1);
        System.out.println("删除成功了🐎？"+(cache.get(1,i->getValue(i)).equals("2")));
    }

    public static String getValue(Integer i){
        System.out.println("传进来的值为："+i);
        return (++i)+"";
    }

    @Test
    public void test3(){
        String s=null;
        try{
            System.out.println("执行前输出。。");
            s.equals("1");
            System.out.println("出错了后面还执行否？");
        }catch (Exception e){
            e.printStackTrace();

        }
    }
}
