package com.module.player.packet;

import com.common.serial.Serializer;

public class PlayerLoginResponse extends Serializer {

    private int money;

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }

    @Override
    protected void read() {
        this.money=readInt();
    }

    @Override
    protected void write() {
        writeInt(money);
    }
}
