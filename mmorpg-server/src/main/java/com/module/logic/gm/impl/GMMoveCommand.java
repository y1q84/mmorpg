package com.module.logic.gm.impl;

import com.module.logic.gm.AbstractGMCommand;
import com.module.logic.gm.GMResultMessage;
import com.module.logic.gm.GMType;
import com.module.logic.move.packet.ReqMoveCommandPacket;
import com.module.player.entity.Player;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class GMMoveCommand  extends AbstractGMCommand {

    public final static String PATTERN="^move\\s([a-z]+)\\s([a-z]+)$";

//    @Autowired
//    Client client;
//
//    @Autowired
//    SocketPacketId socketPacketId;

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

        sendPacket(new ReqMoveCommandPacket(),params);

        return null;
    }

    public void sendPacket(ReqMoveCommandPacket reqMovePacket, List<String> params){
//        short packetId = socketPacketId.getPacketId2Request().inverse().get(reqMovePacket.getClass());

//        String data=params.get(1);
//        System.out.println("移动到的目标地方为："+data);
        //此处获取客户端对象并将之发送给服务端
        //将数据封装成RequestPacket
//        Request request=new Request();
//        request.setModule((short)1);
//        request.setCmd((short)1);
//        request.setData(data.getBytes());

        //获取到数据
        String data=params.get(1);
        //将数据封装成请求对象
        ReqMoveCommandPacket movePacket=new ReqMoveCommandPacket();
        movePacket.setMoveId(Integer.parseInt(data));
        //将movePacket转成字节流传输
//        RequestPacket req=RequestPacket.valueOf(packetId, JSON.toJSONBytes(movePacket));

        //发送到服务端
//        client.getChannel().writeAndFlush(req);
    }
}
