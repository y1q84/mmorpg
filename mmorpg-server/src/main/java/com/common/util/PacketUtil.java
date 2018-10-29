package com.common.util;

import com.common.session.Session;

public class PacketUtil {

    public static void sendPacket(Session session, Object packet){
        session.getChannel().writeAndFlush(packet);
    }
}
