package com.common.resource.provider;

import com.common.resource.data.ResourceDataObject;
import com.common.resource.read.ReadManager;

import java.util.ArrayList;
import java.util.List;

public class StaticResourceProvider<T> extends AbstractResourceProvider<T> {

    private List<T> list=new ArrayList<>();
    private ResourceDataObject resourceDataObject;

    @Override
    public void reload() {
        list=ReadManager.valueOf().read(resourceDataObject);
    }

    @Override
    public T get(int id) {
        return null;
    }

    public List<T> getList() {
        return list;
    }

    public void setList(List<T> list) {
        this.list = list;
    }
}
