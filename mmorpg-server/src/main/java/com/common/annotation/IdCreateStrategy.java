package com.common.annotation;

import java.lang.annotation.*;

/**
 * id生成策列，根据不同的类型使用不同策列生成不同的不同的id
 */
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface IdCreateStrategy {
    String value() default "uuid";
}
