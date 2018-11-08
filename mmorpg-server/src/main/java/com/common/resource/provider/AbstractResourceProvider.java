package com.common.resource.provider;

public abstract class AbstractResourceProvider<T> implements ResourceProvider<T>{
    public abstract void reload();
}
