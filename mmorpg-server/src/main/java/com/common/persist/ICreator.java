package com.common.persist;

public interface ICreator<ID,T> {

    T create(ID id);
}
