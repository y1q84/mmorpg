package com.common.identify;

import com.common.annotation.IdCreateStrategy;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

/**
 * 存放id生成策略类型及对应的生成策略
 */
@Component
public class IdCreateStrategyProvider implements ApplicationContextAware {
    private ApplicationContext applicationContext;
    private Map<String,GeneratorStrategy> type2Strategy=new HashMap<>();
    private static IdCreateStrategyProvider idCreateStrategyProvider;

    @PostConstruct
    public void init(){
        Map<String,GeneratorStrategy> map=applicationContext.getBeansOfType(GeneratorStrategy.class);
        for(Map.Entry<String,GeneratorStrategy> entry:map.entrySet()){
            String type=entry.getValue().getType();
            type2Strategy.put(type,entry.getValue());
        }
        idCreateStrategyProvider=this;
    }

    public static IdCreateStrategyProvider getInstance(){
        return idCreateStrategyProvider;
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext=applicationContext;
    }


    public GeneratorStrategy getGeneratorStrategy(String type){
        return type2Strategy.get(type);
    }
}
