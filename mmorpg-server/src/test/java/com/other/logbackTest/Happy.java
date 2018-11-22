package com.other.logbackTest;

import io.netty.util.HashedWheelTimer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.LocalTime;
import java.util.concurrent.TimeUnit;

public class Happy {

    private static Logger logger= LoggerFactory.getLogger(Happy.class);

    public static void main(String[] args)  throws Exception{
//        logger.trace("*****trace*****");
//        logger.debug("*****debug*****");
//        logger.info("*****info*****");
//        logger.warn("*****warn*****");
//        logger.error("*****error*****");
//        String type="WARRIOR";
//        RoleType roleType=RoleType.valueOf(type);
//        System.out.println(roleType.name());
        HashedWheelTimer timer = new HashedWheelTimer(100, TimeUnit.MILLISECONDS, 16);

        System.out.println("1->"+LocalTime.now());

        timer.newTimeout((timeout) -> {
            System.out.println("2->"+LocalTime.now());
            System.out.println(timeout);
        }, 5, TimeUnit.SECONDS);

        //阻塞main线程
        System.in.read();
    }
}
