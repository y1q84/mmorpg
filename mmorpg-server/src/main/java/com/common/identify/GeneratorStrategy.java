package com.common.identify;

/**
 * author:ydx
 * create 2018\11\15 0015
 */
public interface GeneratorStrategy<T> {
    T createUniqueId();
}
