package com.common.resource.provider;

public interface ResourceProvider<T> extends DataProvider<T>{

    void reload();
}
