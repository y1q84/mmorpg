package com.other.entity;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.query.Query;
import org.springframework.stereotype.Component;

import java.util.Iterator;
import java.util.List;

@Component
public class TestNameQuery {

    public static void main(String[] args) {

        // 在5.1.0版本汇总，hibernate则采用如下新方式获取：
        // 1. 配置类型安全的准服务注册类，这是当前应用的单例对象，不作修改，所以声明为final
        // 在configure("cfg/hibernate.cfg.xml")方法中，如果不指定资源路径，默认在类路径下寻找名为hibernate.cfg.xml的文件
        final StandardServiceRegistry registry = new StandardServiceRegistryBuilder()
                .configure("hibernate.cfg.xml").build();
        // 2. 根据服务注册类创建一个元数据资源集，同时构建元数据并生成应用一般唯一的的session工厂
        SessionFactory sessionFactory = new MetadataSources(registry)
                .buildMetadata().buildSessionFactory();

        /**** 上面是配置准备，下面开始我们的数据库操作 ******/
        Session session = sessionFactory.openSession();// 从会话工厂获取一个session
        // creating transaction object
        Transaction t = session.beginTransaction();

        // 装点示例数据
//        User u1=new User();
//        u1.setId((long) 11111);
//        u1.setName("王贵");
//        u1.setPassword("1233667");
//        session.save(u1);
//        t.commit();

        // Hibernate Named Query
        Query query = session.getNamedQuery("findAllUser");
        List<User> users = query.list();
        //根据id进行查询
        Query query1=session.getNamedQuery("findUserById");
        query1.setParameter(1,3L);
        List<User> users1=query1.list();
        //根据名字进行查询
        Query query2=session.getNamedQuery("findUserByName");
        query2.setParameter("name","zhangwuji");
        List<User> users2=query2.list();

        //查全部
        Iterator<User> itr = users.iterator();
        while (itr.hasNext()) {
            User e = itr.next();
            System.out.println("用户名："+e.getName());
        }
        //根据id进行查询
        Iterator<User> itr1 = users1.iterator();
        while (itr1.hasNext()) {
            User e = itr1.next();
            System.out.println("根据id查询所得用户名："+e.getName());
        }
        //根据名字进行查找
        //根据id进行查询
        Iterator<User> itr2 = users2.iterator();
        while (itr2.hasNext()) {
            User e = itr2.next();
            System.out.println("根据用户名查询所得用户名："+e.getName());
        }

        session.close();

    }
}
