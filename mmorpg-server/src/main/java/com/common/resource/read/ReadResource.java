package com.common.resource.read;

import com.common.resource.data.ResourceDataObject;
import com.common.resource.type.ResourceType;

import java.util.List;

public interface ReadResource {

    <T> List<T> read(ResourceDataObject resourceDataObject);
    ResourceType getResourceType();
}
