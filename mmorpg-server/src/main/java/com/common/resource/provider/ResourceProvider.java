package com.common.resource.provider;

import java.util.List;

public interface ResourceProvider<T,ID> extends DataProvider<T, ID>{
    List<T> readList();
    void reload();
}
