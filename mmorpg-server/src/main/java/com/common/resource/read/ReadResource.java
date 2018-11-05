package com.common.resource.read;

import com.common.resource.data.ResourceDataObject;

import java.util.Map;

public interface ReadResource {
    String getSuffix();

    Map read(ResourceDataObject resourceDataObject);
}
