package com.module.logic.player.vo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class UserService extends UserDao{
    @Autowired
    private UserDao userDao;
//    @Transactional
    public void save(Person person){
        userDao.save(person);
    }

    public static void main(String[] args) {
        ApplicationContext ac=new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService=ac.getBean(UserService.class);
        Person p = new Person();
        p.setName("尼古拉斯");
        p.setAge(27);
        p.setBirth(new Date());
        userService.save(p);
    }
}
