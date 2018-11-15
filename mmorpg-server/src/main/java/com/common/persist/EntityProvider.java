package com.common.persist;

import com.common.resource.provider.DataProvider;

import java.util.List;

public interface EntityProvider<T extends IEntity,ID> extends DataProvider<T,ID> {
    T get(ID id);
    List<T> load();
    T loadOrCreate(ID id,ICreator<ID,T> creator);
    void save(T entity);
    void update(T entity);
    void delete(T entity);
    void delete(ID id);
    List<T> query(String sql,Object...params);

}