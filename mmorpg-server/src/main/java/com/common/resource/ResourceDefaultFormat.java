package com.common.resource;

import com.common.resource.type.ResourceType;

/**
 * 设置某些资源属性的默认格式
 */
public class ResourceDefaultFormat {

    private String path;
    private String suffix;
    private ResourceType type;

    public ResourceDefaultFormat(){

    }

    public ResourceDefaultFormat(String path,String suffix,ResourceType type){
        this.path=path;
        this.suffix=suffix;
        this.type=type;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getSuffix() {
        return suffix;
    }

    public void setSuffix(String suffix) {
        this.suffix = suffix;
    }

    public ResourceType getType() {
        return type;
    }

    public void setType(ResourceType type) {
        this.type = type;
    }
}
