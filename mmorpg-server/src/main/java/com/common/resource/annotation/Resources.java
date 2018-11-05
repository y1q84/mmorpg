package com.common.resource.annotation;

import com.common.resource.type.ResourceType;

import java.lang.annotation.*;

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Resources {
    /**
     * 用来表示资源类对应的配置表名称
     * @return
     */
    String value() default "";
    ResourceType type() default ResourceType.NONE;
    String path() default "";
    String suffix()default "";
}
