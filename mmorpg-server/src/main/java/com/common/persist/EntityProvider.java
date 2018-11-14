package com.common.persist;

import com.common.resource.provider.DataProvider;

import java.util.List;

public interface EntityProvider<T> extends DataProvider<T> {
    T get(long id);
    List<T> load();
    void loadOrCreate(T entity);
    void save(T entity);
    void update(T entity);
    void delete(T entity);
    void delete(Long id);
    List<T> query(String sql,Object...params);

}
