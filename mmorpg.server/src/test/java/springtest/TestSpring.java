package springtest;

import com.server.GameServer;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestSpring {
    public static void main(String[] args) {
        ApplicationContext applicationContext=new ClassPathXmlApplicationContext("applicationContext.xml");
        GameServer server=applicationContext.getBean(GameServer.class);
        System.out.println("++++++++++++++"+server);
        server.start();
    }
}
