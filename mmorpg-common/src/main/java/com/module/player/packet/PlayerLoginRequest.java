package com.module.player.packet;

import com.common.serial.Serializer;

public class PlayerLoginRequest extends Serializer {

    private long playerId;

    private String pass;

    public long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(long playerId) {
        this.playerId = playerId;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    @Override
    protected void read() {
        this.playerId=readLong();
        this.pass=readString();
    }

    @Override
    protected void write() {
        writeLong(playerId);
        writeString(pass);

    }
}
