package com.module.logic.map.packet.vo;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;

public class PlayerInfo {
    @Protobuf
    private long playerId;
    @Protobuf
    private String playerName;
    @Protobuf
    private String role;

    public long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(long playerId) {
        this.playerId = playerId;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
