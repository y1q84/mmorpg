package com.module.logic.player.vo.user;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.util.Date;

public class Demo {
    public static void main(String[] args) {
        SessionFactory factory = new Configuration().configure().buildSessionFactory();
        Session session = factory.openSession();

        session.beginTransaction();	// 开启事务

        try{
            Person p = new Person();
            p.setName("Lonlens");
            p.setAge(22);
            p.setBirth(new Date());

            session.save(p);
        } catch(Exception e) {
            e.printStackTrace();
            session.getTransaction().rollback();	// 回滚事务
        }

        session.getTransaction().commit();	// 提交事务
    }
}
