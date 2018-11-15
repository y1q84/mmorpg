package com.common.resource.provider;

import com.common.resource.data.ResourceDataObject;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

public abstract class AbstractResourceProvider<T,ID> implements ResourceProvider<T, ID>{

    protected volatile List<T> list=new ArrayList<>();
    protected ResourceDataObject resourceDataObject;

    @Override
    public List<T> readList() {
        return list;
    }

    @Override
    public void reload() {
        try{
            if(resourceDataObject.getResources()==null||resourceDataObject.getResources().length==0){
                throw new FileNotFoundException(String.format("该路径下文件找不到%s"+resourceDataObject.getPath()));
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        list=loadAll(resourceDataObject);
    }

    @Override
    public T get(ID id) {
        return null;
    }

    protected abstract List<T> loadAll(ResourceDataObject resourceDataObject);

    public List<T> getList() {
        return list;
    }

    public void setList(List<T> list) {
        this.list = list;
    }

    public void setResourceDataObject(ResourceDataObject resourceDataObject) {
        this.resourceDataObject = resourceDataObject;
    }

    public ResourceDataObject getResourceDataObject() {
        return resourceDataObject;
    }

}
