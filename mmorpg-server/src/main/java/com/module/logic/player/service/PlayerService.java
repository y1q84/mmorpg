package com.module.logic.player.service;

import org.springframework.stereotype.Service;

/**
 * author:ydx
 * create 2018\10\21 0021
 */
@Service
public class PlayerService {

    public boolean playerLogin(String userName,String password){
        //从数据库中查找
        //如果用户名和密码匹配的话则查找成功
        //想客户端发送消息
        if("jame".equals(userName)&&"123456".equals(password)){
            //登录成功
            //向客户端发送消息
            return true;
        }
        return false;

    }
}
