package com.common.persist;

import com.common.identify.IdCreateStrategyProvider;
import com.common.identify.SnowflakeGeneratorStrategy;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.github.benmanes.caffeine.cache.LoadingCache;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.concurrent.TimeUnit;

/**
 * T继承IEntity是为了能设置id,并将id与entity的映射放进缓存
 * @param <T>
 * @param <ID>
 */
public class CacheEntityProvider<T extends IEntity<ID>,ID extends Serializable> extends HibernateEntityProvider<T,ID> {
    LoadingCache<ID, T> loadingCache = Caffeine.newBuilder()
            .maximumSize(10_000)
            .expireAfterWrite(10, TimeUnit.MINUTES)
            .build(id -> super.get((ID) id));

    @Override
    public T get(ID id) {
        T t=loadingCache.get(id);//从缓存中拿出
        return t;
    }

    @Override
    public T loadOrCreate(ID id, ICreator<ID, T> creator) {
        T t=get(id);
        if(t!=null){
            return t;
        }
        t=creator.create(id);
        save(t);
        return t;
    }

    @Override
    public void save(T entity) {
//        ID id=(ID)(SnowflakeGeneratorStrategy.getInstance().createUniqueId());
        //此处需要获取实体类上面的@IdCreateStrategy的value值以确定采用哪种id生成策略
        String type=getIdCreateType();
        ID id=(ID)IdCreateStrategyProvider.getInstance().getGeneratorStrategy(getIdCreateType()).createUniqueId();
        entity.setId(id);
        loadingCache.put(entity.getId(),entity);
        super.save(entity);
    }

    //插入数据，主键不是自动生成
    public void add(T entity){
        super.save(entity);
    }

    @Override
    public void update(T entity) {
        loadingCache.put(entity.getId(),entity);
        super.update(entity);
    }

    @Override
    public void delete(ID id) {
        loadingCache.invalidate(id);
        super.delete(id);
    }

    @Override
    public void delete(T entity) {
        loadingCache.invalidate(entity.getId());
    }
}
