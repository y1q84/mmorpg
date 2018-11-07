package com.common.resource.provider;

import com.common.resource.data.ResourceDataObject;
import com.common.resource.read.ReadManager;

import java.util.ArrayList;
import java.util.List;

public class StaticResourceProvider<T> extends AbstractResourceProvider<T> {

    private List<T> list=new ArrayList<>();
    private ResourceDataObject resourceDataObject;

    @Override
    void reload() {
        list=ReadManager.valueOf().read(resourceDataObject);
    }
}
