package com.module.logic.gm.impl;

import com.common.model.Request;
import com.communication.communicateWithServer.Client;
import com.module.logic.gm.AbstractGMCommand;
import com.module.logic.gm.GMResultMessage;
import com.module.logic.gm.GMType;
import com.module.player.entity.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class GMMoveCommand  extends AbstractGMCommand {

    public final static String PATTERN="^move\\s([a-z]+)\\s([a-z]+)$";

    @Autowired
    Client client;

    public GMMoveCommand(){
        setType(GMType.MOVE);
    }

    @Override
    public String getPattern() {
        return PATTERN;
    }

    @Override
    public String help() {
        return "场景移动CM命令";
    }

    @Override
    public GMResultMessage execute(Player player, List<String> params) {

        String type=params.get(1);
        System.out.println("移动到的目标地方为："+type);

        //此处获取客户端对象并将之发送给服务端
        //将数据封装成Request
        Request request=new Request();
        request.setModule((short)1);
        request.setCmd((short)1);
        request.setData(type.getBytes());

        //发送到服务端
        client.getChannel().write(request);

        return null;
    }
}
