package com.module.logic.skill.handler;

import com.common.annotation.WsClass;
import com.common.session.Session;
import com.module.logic.skill.packet.ReqUseSkillPacket;
import com.module.logic.skill.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;

@WsClass
public class SkillHandler {

    @Autowired
    private SkillService skillService;

    public void useSkill(Session session, ReqUseSkillPacket reqUseSkillPacket){
        skillService.useSkill(session,reqUseSkillPacket);
    }
}
