//package com.common.observer;
//
//import com.module.logic.player.Player;
//import org.junit.Test;
//
//import static org.junit.Assert.*;
//
//public class ListeningControllerTest {
//
//
//    @Test
//    public void test1(){
//        Player player=new Player();
//        //在登录之前添加监听，比如在创建角色成功之后
//        player.getListeningController().attachEvent(IRoleLogin.class,()->{
//            System.out.println("哈哈哈");
//        });
//
//        //当玩家进行登录的时候，抛出事件,监听者捕获之后进行处理
//        player.getListeningController().fire(IRoleLogin.class).onLogin();
//    }
//
//    @Test
//    public void test2(){
//        Player player=new Player();
//        //在注册成功，创建角色之前添加创建角色监听
//        player.getListeningController().attachEvent(IRoleCreate.class,()->{
//            System.out.println("点击屏幕下方开启首充吧，各种惊喜大礼包等你来拿！");
//        });
//
//        //当进行角色创建时抛出事件，上面的监听者捕获，进行处理
//        player.getListeningController().fire(IRoleCreate.class).onCreateRole();
//    }
//
//}