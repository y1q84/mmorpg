package com.common.persist;

import org.apache.poi.ss.formula.functions.T;

public class CacheEntityProvider extends HibernateEntityProvider<T> {
//    LoadingCache<String, Object> loadingCache = Caffeine.newBuilder()
//            .maximumSize(10_000)
//            .expireAfterWrite(10, TimeUnit.MINUTES)
//            .build(key -> get(key));
}
