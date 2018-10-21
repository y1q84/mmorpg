package com.module.logic.player.entity;

/**
 * author:ydx
 * create 2018\10\21 0021
 */
public class PlayerEntity {

    private long playerId;
    private String userName;
    private String password;

    public long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(long playerId) {
        this.playerId = playerId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
