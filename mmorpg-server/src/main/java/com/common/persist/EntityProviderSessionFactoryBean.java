package com.common.persist;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;

public class EntityProviderSessionFactoryBean extends LocalSessionFactoryBean {
    @Override
    public void setBeanFactory(BeanFactory beanFactory) {
        super.setBeanFactory(beanFactory);
    }
}
