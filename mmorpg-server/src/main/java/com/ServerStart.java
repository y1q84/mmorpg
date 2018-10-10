package com;

import com.commnunication.server.GameServer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class ServerStart {
    static Logger logger=LoggerFactory.getLogger(ServerStart.class);

    public static void main(String[] args) {
        ApplicationContext applicationContext=new ClassPathXmlApplicationContext("applicationContext.xml");
        GameServer server=applicationContext.getBean(GameServer.class);
        server.start();
        logger.info("ServerStart启动服务器..");
    }
}
