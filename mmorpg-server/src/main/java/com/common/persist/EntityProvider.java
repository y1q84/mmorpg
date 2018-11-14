package com.common.persist;

import com.common.resource.provider.DataProvider;

import java.util.List;

public interface EntityProvider<T extends IEntity,ID> extends DataProvider<T,ID> {
    T get(ID id);
    List<T> load();
    void loadOrCreate(T entity);
    void save(T entity);
    void update(T entity);
    void delete(T entity);
    void delete(ID id);
    List<T> query(String sql,Object...params);

}
