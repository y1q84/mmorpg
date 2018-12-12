package com.module.logic.skill.service;

import com.common.session.Session;
import com.common.thread.DispatchHandlerExecutor;
import com.common.thread.DispatchTask;
import com.common.util.PacketUtil;
import com.module.logic.map.MapInstance;
import com.module.logic.map.manager.MapManager;
import com.module.logic.map.obj.CreatureObject;
import com.module.logic.player.Player;
import com.module.logic.player.entity.PlayerEntity;
import com.module.logic.player.manager.PlayerManager;
import com.module.logic.player.packet.RespBroadcastScenePacket;
import com.module.logic.player.service.PlayerService;
import com.module.logic.skill.manager.SkillManager;
import com.module.logic.skill.packet.ReqUseSkillPacket;
import com.module.logic.skill.packet.RespUseSkillPacket;
import com.module.logic.skill.resource.SkillResource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;

@Component
public class SkillService {
    Logger logger=LoggerFactory.getLogger(SkillService.class);

    //需要注意的是这是一个单例类，里面的共享变量是被共享的，
    //多个玩家共用同一个skillCD肯定是有问题的，应该作为玩家的属性比较合理
    //技能id与技能冷却时间的映射
//    private Map<Integer,Long> skillCD=new HashMap<>();
//    AtomicBoolean isIncreaseMp=new AtomicBoolean(true);

    @Autowired
    private PlayerService playerService;
    @Autowired
    private DispatchHandlerExecutor dispatchHandlerExecutor;

    public void useSkill(Session session, ReqUseSkillPacket reqUseSkillPacket){

        Player player=PlayerManager.getInstance().getPlayer2session().inverse().get(session);
        long mapId=reqUseSkillPacket.getMapId();
        long targetId=reqUseSkillPacket.getTargetId();
        MapInstance mapInstance=MapManager.getInstance().getMapInstance(mapId);
        RespUseSkillPacket respUseSkillPacket=new RespUseSkillPacket();
        if(mapInstance==null){
            logger.info("该场景不存在...");
            return;
        }
        int skillId=reqUseSkillPacket.getSkillId();
        if(skillId==0){
            logger.info("该技能不存在...");
            return;
        }
        //判断上一个技能的cd是否到期
        SkillResource skillResource=SkillManager.getInstance().getSkillResourceById(skillId);
        if(!player.isCanUseSkill(skillResource)){
            respUseSkillPacket.setResult("技能冷却中，暂时无法使用...");
            PacketUtil.sendPacket(session,respUseSkillPacket);
            logger.info("技能冷却中，暂时无法使用...");
            return ;
        }

        //设置恢复蓝量
        while(player.getIsIncreaseMp().get()){
            increaseMp(session,skillResource);
            player.getIsIncreaseMp().set(false);
        }

        //使用技能消耗mp
        PlayerEntity playerEntity=player.getPlayerEntity();
        int mp=playerEntity.getMp();
        if(skillResource.getConsumeMp()>mp){
            respUseSkillPacket.setResult("蓝量不足，无法使用技能...");
            PacketUtil.sendPacket(session,respUseSkillPacket);
            logger.info("蓝量不足，无法使用技能...");
            return;
        }
        int newMp=mp-skillResource.getConsumeMp();
        playerEntity.setMp(newMp);
        PlayerManager.getInstance().updatePlayerEntity(playerEntity);

        //对目标造成伤害
        int value=skillResource.getDamage();
        CreatureObject creatureObject=(CreatureObject) mapInstance.getObjectInMap().get(targetId);
        if(creatureObject==null){
            respUseSkillPacket.setResult("技能攻击的目标不存在...");
            PacketUtil.sendPacket(session,respUseSkillPacket);
            logger.info("技能攻击的目标不存在...");
            return;
        }
        //被攻击方血量减少
        int diff=creatureObject.getHp()-value;
        boolean flag=false;
        if(diff>0){
            creatureObject.setHp(diff);
        }else{
            flag=true;
            creatureObject.setHp(0);
            creatureObject.setStatus(0);
        }
        //技能冷却
        player.addCoolDown(skillResource);

        //发送响应释放技能的包
        respUseSkillPacket.setResult("成功释放技能...");
        PacketUtil.sendPacket(session,respUseSkillPacket);

        //判断生物血量是否为空
        String result;
        if(flag){
            mapInstance.removeObjectInMap(mapInstance.getObjectInMap().get(targetId));
            result=String.format("id为%d的生物已被击杀...",targetId);
        }else{
            result=String.format("正在攻击id为%d的生物...",targetId);
        }
        //显示场景里面生物的信息
        playerService.showCreatureInMap(session,player);
        //向场景内其他玩家广播
        RespBroadcastScenePacket respBroadcastScenePacket=new RespBroadcastScenePacket(mapId,player.getId(),result);
        PacketUtil.broadcast(session,respBroadcastScenePacket);
    }

    //每隔一段时间回蓝
    public void increaseMp(Session session,SkillResource skillResource){
        dispatchHandlerExecutor.scheduleWithFixedDelay(new DispatchTask() {
            @Override
            public String getHashString() {
                return String.valueOf(session.getId());
            }

            @Override
            public void run() {
                try{
                    //回蓝
                    PlayerManager playerManager=PlayerManager.getInstance();
                    Player player=playerManager.getPlayer2session().inverse().get(session);
                    PlayerEntity playerEntity=player.getPlayerEntity();
                    int mp=playerEntity.getMp();
                    if(mp<skillResource.getMaxIncreaseMp()){
                        playerEntity.setMp(mp+skillResource.getIncreaseMp());
                        playerManager.updatePlayerEntity(playerEntity);
                    }
                }catch (Exception e){
                    e.printStackTrace();
                }
            }
        },0,1, TimeUnit.MINUTES);

    }
}
