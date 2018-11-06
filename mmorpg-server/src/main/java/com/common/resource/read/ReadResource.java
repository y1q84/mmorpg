package com.common.resource.read;

import com.common.resource.data.ResourceDataObject;

import java.util.List;

public interface ReadResource {

    <T> List<T> read(ResourceDataObject resourceDataObject);
}
