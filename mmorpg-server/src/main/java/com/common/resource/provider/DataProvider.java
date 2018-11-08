package com.common.resource.provider;

public interface DataProvider<T> {
    T get(int id);
}
