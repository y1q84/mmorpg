package com.common.identify;

import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class UuidGeneratorStrategy implements GeneratorStrategy<String> {
    @Override
    public String createUniqueId() {
        return UUID.randomUUID().toString();
    }

    @Override
    public String getType() {
        return "uuid";
    }
}
