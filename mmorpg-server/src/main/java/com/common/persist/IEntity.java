package com.common.persist;

import com.common.util.JsonStringType;
import org.hibernate.annotations.TypeDef;

import javax.persistence.MappedSuperclass;

/**
 * author:ydx
 * create 2018\11\15 0015
 */
@MappedSuperclass
@TypeDef(name = "json", typeClass = JsonStringType.class)
public interface IEntity<ID> {

    ID getId();
    void setId(ID id);
}
