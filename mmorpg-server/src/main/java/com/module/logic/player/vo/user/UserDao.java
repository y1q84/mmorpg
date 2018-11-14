package com.module.logic.player.vo.user;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.support.HibernateDaoSupport;
import org.springframework.stereotype.Component;

@Component
public class UserDao extends HibernateDaoSupport {

    @Autowired
    public void setSessionFactoryOverride(SessionFactory sessionFactory)
    {
        super.setSessionFactory(sessionFactory);
    }

    public void save(Person person){
//        getHibernateTemplate().execute(session -> {
//            session.beginTransaction();
//            session.save(person);
//            session.flush();
//            session.clear();
//            session.getTransaction().commit();
//            return 1;
//        });
        getHibernateTemplate().save(person);

    }

}
