package com.common.resource.provider;

public interface DataProvider<T,ID> {
    T get(ID id);
}
