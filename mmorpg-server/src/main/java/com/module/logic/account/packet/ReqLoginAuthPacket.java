package com.module.logic.account.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "用户登录验证")
public class ReqLoginAuthPacket extends AbstractPacket {
    @Protobuf(description = "用户名")
    private String account;
    @Protobuf(description = "密码")
    private String password;
    @Protobuf(description = "密钥")
    private String key;

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

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    @Override
    public short getPacketId() {
        return PacketId.LOGIN_AUTH_REQ;
    }
}
