package com.common.observer;

import com.module.logic.player.Player;
import org.junit.Test;

import static org.junit.Assert.*;

public class ListeningControllerTest {


    @Test
    public void test1(){
        Player player=new Player();
        //添加监听
        player.getListeningController().attachEvent(IRoleLogin.class,()->{
            System.out.println("哈哈哈");
        });

        //抛出事件,监听捕获之后进行处理
        player.getListeningController().fire(IRoleLogin.class).onLogin();
    }

}