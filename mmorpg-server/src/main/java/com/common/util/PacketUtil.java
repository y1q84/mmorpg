package com.common.util;

import com.common.session.Session;
import com.module.logic.map.obj.MapObject;
import com.module.logic.player.packet.RespBroadcastEnterWorldPacket;
import com.module.logic.player.Player;
import com.module.logic.player.manager.PlayerManager;

import java.util.Map;

public class PacketUtil {

    public static void sendPacket(Session session, Object packet){
        session.getChannel().writeAndFlush(packet);
    }
    public static void broatcastEnterWorldPacket(Session session, Object packet, Map<Long, Player> palyerInScene){
        RespBroadcastEnterWorldPacket respPacket=(RespBroadcastEnterWorldPacket)packet;
        long id=respPacket.getPlayerId();//当前玩家id
        //这里需要获取到其他玩家的session以获取不同的channel发送消息
        Map<Player,Session> p2s=PlayerManager.getInstance().getPlayer2session();
        Player player=null;
        Session s=null;
        for(Map.Entry<Long,Player> entry:palyerInScene.entrySet()){
            player=entry.getValue();
            s=p2s.get(player);
            long playerId=entry.getKey();//场景内所有玩家的id
            //广播给除自己之外的其他玩家
            if(playerId!=id){
                s.getChannel().writeAndFlush(respPacket);
                System.out.println("playerId为："+id+"的玩家进入场景...");
            }
        }

    }


    public void broadcast(MapObject mapObject,Object packet,Session session){

    }
}
