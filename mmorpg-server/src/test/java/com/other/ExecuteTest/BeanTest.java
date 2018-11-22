package com.other.ExecuteTest;

import com.other.excelTest.Monster;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

@Component
public class BeanTest implements ApplicationContextAware {

    ApplicationContext applicationContext;
    Monster monster;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        System.out.println("运行啦...");
        this.applicationContext=applicationContext;
        this.monster=new Monster();
    }

    public void run(){
        DefaultListableBeanFactory beanFactory = (DefaultListableBeanFactory)applicationContext.getAutowireCapableBeanFactory();
        beanFactory.registerSingleton(monster.getClass().getName(),monster);
        Monster m=applicationContext.getBean(Monster.class);
        Monster m2=applicationContext.getBean(Monster.class);
        System.out.println("为空否？"+m+",等否？"+(m==m2));
    }

//    public static void main(String[] args) {
//        ApplicationContext ac=new ClassPathXmlApplicationContext("applicationContext.xml");
//        BeanTest beanTest=ac.getBean(BeanTest.class);
//        System.out.println("创建成功否？"+beanTest);
//        beanTest.run();
//    }
}
