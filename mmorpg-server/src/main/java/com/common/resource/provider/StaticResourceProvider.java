package com.common.resource.provider;

import com.common.resource.data.ResourceDataObject;
import com.common.resource.read.ReadManager;
import com.common.resource.read.ReadResource;

import java.util.List;

public class StaticResourceProvider<T,ID> extends AbstractResourceProvider<T, ID> {

//    protected volatile List<T> list=new ArrayList<>();
//    protected ResourceDataObject resourceDataObject;

//    @Override
//    public void reload() {
//        list=ReadManager.valueOf().read(resourceDataObject);
//    }

    @Override
    protected List<T> loadAll(ResourceDataObject resourceDataObject) {
        List<T> list=null;
        ReadResource readResource=ReadManager.valueOf().getReadResource(resourceDataObject.getResourceType());
        list=(List<T>)readResource.read(resourceDataObject);
        return list;
    }

//    public List<T> getList() {
//        return list;
//    }
//
//    public void setList(List<T> list) {
//        this.list = list;
//    }

//    @Override
//    public T get(ID id) {
//        return null;
//    }
}
