package com.common.persist;

import com.common.annotation.IdCreateStrategy;
import com.common.util.ReflectUtil;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.orm.hibernate5.HibernateCallback;
import org.springframework.orm.hibernate5.support.HibernateDaoSupport;

import javax.persistence.Id;
import java.io.Serializable;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.util.List;

/**
 * ID继承Serializable是因为session.get(..)的第二个参数为Serializable
 * @param <T>
 * @param <ID>
 */
//@Component
public class HibernateEntityProvider<T extends IEntity,ID extends Serializable> extends HibernateDaoSupport implements EntityProvider<T,ID> {

//    @Autowired
//    private SessionFactory sessionFactory;
//    @PostConstruct
//    public void setSessionFactoryOverride()
//    {
//        super.setSessionFactory(sessionFactory);
//    }

    private Class<T> entityClass;
    //存放id生成策略类型
    private String idCreateType;


    public HibernateEntityProvider(){
        //获取父类的第一个泛型参数，也就是获取一个实体类
        this.entityClass= (Class<T>) ReflectUtil.getGenericType(getClass());
        if(entityClass!=null){
            Field[] fields=entityClass.getDeclaredFields();
            //通过遍历获取@Id注解的id生成策略类型
            for(Field field:fields){
                Annotation annotation=field.getAnnotation(Id.class);
                if(annotation!=null){
                    IdCreateStrategy idCreateStrategy=field.getAnnotation(IdCreateStrategy.class);
                    if(idCreateStrategy!=null){
                        idCreateType=idCreateStrategy.value();
                    }
                }
            }
        }

    }

    protected String getIdCreateType(){
        return this.idCreateType;
    }

    @Override
    public T get(ID id) {
        return this.getHibernateTemplate().execute(session -> {
            Transaction transaction=session.beginTransaction();
            //由于get的第二个参数类型为Serializable故该泛型类的第二个参数要继承它
            T t=session.get(entityClass,id);
            transaction.commit();
            return t;
        });
    }

    @Override
    public List<T> load() {
        return this.getHibernateTemplate().execute(session -> {
            Transaction transaction=session.beginTransaction();
            //通过hql语句进行查询
            List<T> list= (List<T>) session.createQuery("from"+entityClass.getSimpleName());
            return list;
        });
    }

    @Override
    public T loadOrCreate(ID id,ICreator<ID,T> creator) {
            T t= get(id);
            if(t!=null){
                return t;
            }
            t=creator.create(id);
            return t;
    }

    @Override
    public void save(T entity) {
        this.getHibernateTemplate().execute(session -> {
            Transaction transaction=session.beginTransaction();
            session.save(entity);
            session.flush();
            transaction.commit();
            return entity;
        });
    }

    @Override
    public void update(T entity) {
        this.getHibernateTemplate().execute(session -> {
           Transaction transaction=session.beginTransaction();
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
            Transaction transaction=session.beginTransaction();
            session.delete(entity);
            session.flush();
            session.clear();
            transaction.commit();
            return entity;
        });
    }

    @Override
    public void delete(ID id) {
        this.getHibernateTemplate().execute(session -> {
            Transaction transaction=session.beginTransaction();
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
            Transaction transaction=session.beginTransaction();
            //查找实体类上面的@NamedQuery对应的name
            Query<T> query=session.getNamedQuery(sql);
            for(int i=0;i<params.length;i++){
                query.setParameter(i+1,params[i]);
            }
            List<T> list=query.list();
            transaction.commit();
            return list;
        });
    }

    public List<T> findByName(String queryName){
        return this.getHibernateTemplate().execute(session -> {
            Transaction transaction=session.beginTransaction();
            Query query=session.getNamedQuery(queryName);
            List<T> list=query.list();
            transaction.commit();
            return list;
        });
    }
}
