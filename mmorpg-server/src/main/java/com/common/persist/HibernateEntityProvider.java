package com.common.persist;

import com.common.util.ReflectUtil;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.orm.hibernate5.HibernateCallback;
import org.springframework.orm.hibernate5.support.HibernateDaoSupport;

import java.util.List;

public class HibernateEntityProvider<T> extends HibernateDaoSupport implements EntityProvider<T> {
    private Class<T> entityClass;


    public HibernateEntityProvider(){
        entityClass= (Class<T>) ReflectUtil.getSuperGenericType(this.getClass());
    }

    @Override
    public T get(long id) {
        return this.getHibernateTemplate().execute(session -> {
            Transaction transaction=session.beginTransaction();
            T t=session.get(entityClass,id);
            transaction.commit();
            return t;
        });
    }

    @Override
    public List<T> load() {
        return this.getHibernateTemplate().execute(session -> {
            Transaction transaction=session.getTransaction();
            //通过hql语句进行查询
            List<T> list= (List<T>) session.createQuery("from"+entityClass.getSimpleName());
            return list;
        });
    }

    @Override
    public void loadOrCreate(T entity) {
    }

    @Override
    public void save(T entity) {
        this.getHibernateTemplate().execute(session -> {
            Transaction transaction=session.getTransaction();
            session.save(entity);
            session.flush();
            transaction.commit();
            return entity;
        });
    }

    @Override
    public void update(T entity) {
        this.getHibernateTemplate().execute(session -> {
           Transaction transaction=session.getTransaction();
           session.update(entity);
           session.flush();
           session.clear();
           transaction.commit();
           return entity;
        });
    }

    @Override
    public void delete(T entity) {
        this.getHibernateTemplate().execute(session -> {
            Transaction transaction=session.getTransaction();
            session.delete(entity);
            session.flush();
            session.clear();
            transaction.commit();
            return entity;
        });
    }

    @Override
    public void delete(Long id) {
        this.getHibernateTemplate().execute(session -> {
            Transaction transaction=session.getTransaction();
            session.delete(id);
            session.flush();
            session.clear();
            transaction.commit();
            return null;
        });
    }

    @Override
    public List<T> query(String sql, Object... params) {

        return this.getHibernateTemplate().execute((HibernateCallback<List<T>>)session->{
            Transaction transaction=session.getTransaction();
            Query query=session.getNamedQuery(sql);
            for(int i=0;i<params.length;i++){
                query.setParameter(i,params[i]);
            }
            List list=query.list();
            transaction.commit();
            return list;
        });
    }
}
