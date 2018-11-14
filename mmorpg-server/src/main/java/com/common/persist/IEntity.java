package com.common.persist;

/**
 * author:ydx
 * create 2018\11\15 0015
 */
public interface IEntity<ID> {

    ID getId();
    void setId(ID id);
}
