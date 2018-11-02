package com.common.resource;

import java.io.InputStream;
import java.util.List;

public interface ReadResource {
    String getSuffix();

    <E> List<E> read(InputStream inptStream, Class<E> clazz);
}
