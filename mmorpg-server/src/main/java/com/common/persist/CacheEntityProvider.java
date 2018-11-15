package com.common.persist;

import com.common.identify.UniqueIdentifyKey;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.github.benmanes.caffeine.cache.LoadingCache;

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
        T t=loadingCache.get(id);
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
        ID id=(ID)(UniqueIdentifyKey.getInstance().createUniqueId());
        entity.setId(id);
        loadingCache.put(entity.getId(),entity);
    }

    @Override
    public void update(T entity) {
        loadingCache.put(entity.getId(),entity);
    }

    @Override
    public void delete(ID id) {
        loadingCache.invalidate(id);
    }

    @Override
    public void delete(T entity) {
        loadingCache.invalidate(entity.getId());
    }
}
