package com.module.logic.account.packet;


import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "用户登录")
public class ReqLoginPacket extends AbstractPacket {

    @Protobuf(description = "账号")
    private String account;

    @Protobuf(description = "密码")
    private String password;

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public short getPacketId() {
        return PacketId.LOGIN_REQ;
    }
}
