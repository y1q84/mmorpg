package com;

import com.communication.communicateWithBrowser.ServerToBrowser;
import com.communication.communicateWithServer.Client;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Start {

    public static void main(String[] args) {
        ApplicationContext ac=new ClassPathXmlApplicationContext("applicationContext.xml");
        ServerToBrowser gameServer=ac.getBean(ServerToBrowser.class);
        Client client=ac.getBean(Client.class);

        gameServer.start();
        client.clientStart();

    }
}
