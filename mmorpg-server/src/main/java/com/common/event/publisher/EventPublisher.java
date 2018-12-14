package com.common.event.publisher;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.ApplicationEventPublisherAware;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class EventPublisher implements ApplicationEventPublisher, ApplicationEventPublisherAware {

    private ApplicationEventPublisher applicationEventPublisher;

    private static EventPublisher self;

    @PostConstruct
    public void init(){
        this.self=this;
    }

    public static EventPublisher getInstance(){
        return self;
    }

    @Override
    public void publishEvent(Object publishedEvent) {
        this.applicationEventPublisher.publishEvent(publishedEvent);
    }

    @Override
    public void setApplicationEventPublisher(ApplicationEventPublisher applicationEventPublisher) {
        this.applicationEventPublisher=applicationEventPublisher;
    }
}
