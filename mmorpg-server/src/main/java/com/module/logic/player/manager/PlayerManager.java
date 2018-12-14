package com.module.logic.player.manager;

import com.common.persist.CacheEntityProvider;
import com.common.persist.EntityProvider;
import com.common.resource.provider.ResourceProvider;
import com.common.session.Constants;
import com.common.session.Session;
import com.common.util.PacketUtil;
import com.google.common.collect.BiMap;
import com.google.common.collect.HashBiMap;
import com.module.logic.account.entity.AccountEntity;
import com.module.logic.account.manager.AccountManager;
import com.module.logic.map.manager.MapManager;
import com.module.logic.player.Player;
import com.module.logic.player.entity.PlayerEntity;
import com.module.logic.player.event.PlayerLoginEvent;
import com.module.logic.player.logic.position.MapType;
import com.module.logic.player.logic.position.handler.AbstractInitialPositionHandler;
import com.module.logic.player.packet.RespBroadcastScenePacket;
import com.module.logic.player.packet.RespRemoveRolePacket;
import com.module.logic.player.resource.PlayerPositionResource;
import com.module.logic.player.service.PlayerService;
import com.module.logic.player.type.RoleType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class PlayerManager {
    Logger logger=LoggerFactory.getLogger(PlayerManager.class);

    private BiMap<Player,Session> player2session= HashBiMap.create();
    private Map<String,Session> account2Session=new HashMap<>();
    private Map<MapType, AbstractInitialPositionHandler> type2PositionHandler=new HashMap<>();

    private static PlayerManager self;

    @Autowired
    private EntityProvider<PlayerEntity,Long> entityProvider;

    @PostConstruct
    public void init(){
        self=this;
    }
    public static PlayerManager getInstance(){
        return self;
    }

    /**
     * 创建玩家实体
     * @param account 账号
     * @param name 名字
     * @param roleType 角色类型
     * @param sex 性别
     * @return
     */
    public PlayerEntity createPlayerEntity(String account, String name, RoleType roleType,String sex){
        PlayerEntity playerEntity=new PlayerEntity();
        playerEntity.setAccount(account);
        playerEntity.setPlayerName(name);
        playerEntity.setRoleType(roleType);
        playerEntity.setSex(sex);
        return playerEntity;
    }

    /**
     * 创建角色
     * @param playerEntity
     * @return
     */
    public boolean createRole(PlayerEntity playerEntity){
        CacheEntityProvider cacheEntityProvider=(CacheEntityProvider)entityProvider;
        boolean result=false;
        try{
            //可能存在问题？进行赋值之前我并不知道id是多少，是通过save来生成的
            //可能产生的问题？注册覆盖，id相同，那么其他值被覆盖。如果id是相同的话，可以登别人的账号
            //由于id是唯一的，故上面的情况不存在
            cacheEntityProvider.save(playerEntity);
            result=true;
        }catch (Exception e){
            e.printStackTrace();
            logger.error(String.format("%s角色创建失败",PlayerEntity.class.getSimpleName()));
        }
        return result;
    }

    /**
     * 登录操作
     * @param playerId
     * @return
     */
    public boolean roleLogin(long playerId){
        PlayerEntity playerEntity= (PlayerEntity) ((CacheEntityProvider)entityProvider).get(playerId);
        if(playerEntity!=null){
            return true;
        }
        return false;
    }

    /**
     * 登出操作
     * @param session
     * @param player
     */
    public void roleLogOut(Session session,Player player){
        //怎么将先前的玩家踢下线？
        //从场景中移除，保先前角色的数据，进行广播
        MapManager.getInstance().removeFromMap(player);
        //保存玩家最新数据
        long oldMapId=player.getMapId();
        long newMapId=session.getMapId();
        PlayerEntity playerEntity=player.getPlayerEntity();
        player.setMapId(newMapId);
        playerEntity.setMapId(newMapId);
        playerEntity.setMapType(MapType.NORMAL_MAP);
        PlayerManager.getInstance().updatePlayerEntity(playerEntity);
        // TODO 玩家下线的其他操作

        //向先前玩家的其他玩家广播离开了场景
        RespBroadcastScenePacket respBroadcastScenePacket=new RespBroadcastScenePacket();
        respBroadcastScenePacket.setMapId(oldMapId);
        respBroadcastScenePacket.setPlayerId(player.getId());
        respBroadcastScenePacket.setResult("玩家退出当前场景...");
        PacketUtil.broadcast(session,respBroadcastScenePacket);
        //最后应该关闭会话
//        session.getChannel().close();
    }

    /**
     *登录时添加player与session的映射
     * @param session
     * @param player
     */
    public void addSession2Player(Session session,Player player){
        //TODO 这里需要考虑一个问题就是判断玩家是否已经登录，如果已经登录则需要将之踢下线
        if(account2Session.size()>0){
            Session oldSession=account2Session.get(player.getPlayerEntity().getAccount());
            if(oldSession!=null){
                //说明此账号已经有登录
                Player prePlayer=player2session.inverse().get(oldSession);
                //向先前玩家发送已经被强制下线通知
                RespRemoveRolePacket removeRolePacket=new RespRemoveRolePacket();
                removeRolePacket.setReason("账号重复登录，你已被挤下线啦..");
                PacketUtil.sendPacket(oldSession,removeRolePacket);
                //执行登出操作
                roleLogOut(oldSession,prePlayer);
                //从集合移除先前的玩家
                player2session.remove(prePlayer);
            }
        }
        //设置新的session
        account2Session.put(player.getPlayerEntity().getAccount(),session);
        player2session.put(player,session);
    }

    /**
     * 连接断开时进行处理
     * @param session
     */
    public void dealWithChannelClose(Session session){
        Player player=player2session.inverse().get(session);
        if(player!=null){
            roleLogOut(session,player);
            //连接断开应该清除player2session，account2Session两个集合中对应的Player
            player2session.inverse().remove(session);
            account2Session.remove(session.getAccount(Constants.SESSION_ID));
        }
    }

    /**
     * 更新账号里面的玩家id
     * @param playerEntity
     * @param account
     */
    public void updateAccount(PlayerEntity playerEntity,String account){
        //往该账号添加角色id
        //由账号查询得到AccountEntity
//        List<Long> ids=new ArrayList<>();
        AccountEntity accountEntity= AccountManager.getInstance().findAccountEntity(account,"findAccountEntityByAccount").get(0);
//        ids.add(playerEntity.getPlayerId());
        accountEntity.addIds(playerEntity.getPlayerId());
        //需要更新到数据库
        CacheEntityProvider cacheEntityProvider=(CacheEntityProvider)entityProvider;
        cacheEntityProvider.update(accountEntity);
    }

    /**
     * 将最新玩家数据保存到数据库
     * @param playerEntity
     */
    public void updatePlayerEntity(PlayerEntity playerEntity){
        CacheEntityProvider cacheEntityProvider=(CacheEntityProvider)entityProvider;
        cacheEntityProvider.update(playerEntity);
    }

    public PlayerEntity findPlayerEntity(Object obj){
        List<PlayerEntity> list=new ArrayList<>();
        CacheEntityProvider cacheEntityProvider=(CacheEntityProvider)entityProvider;
        if(obj instanceof Long){
            long playerId=(long)obj;
            list=cacheEntityProvider.query("findPlayerEntityById",playerId);
        }else if(obj instanceof String){
            String playerName=(String)obj;
            list=cacheEntityProvider.query("findPlayerEntityByName", playerName);
        }
        if(list.size()>0){
            return list.get(0);
        }
        return null;
    }

    //全局事件监听器，当发布playerLoginEvent事件的时候执行此方法
    @EventListener
    public void loginListener(PlayerLoginEvent playerLoginEvent){
        Player player=(Player)playerLoginEvent.getSource();
        System.out.println("蓝量为："+player.getMp());
        //TODO 初始化玩家信息
        //初始化玩家背包信息
//        player.setPlayerGoodsProvider();
    }

    /**
     * 添加登录位置类型与登录位置处理器的映射
     * @param positionHandler
     */
    public void registerPostionHandler(AbstractInitialPositionHandler positionHandler){
        type2PositionHandler.put(positionHandler.getMapType(),positionHandler);
    }

    public BiMap<Player, Session> getPlayer2session() {
        return player2session;
    }

    public void setPlayer2session(BiMap<Player, Session> player2session) {
        this.player2session = player2session;
    }

    public Map<String, Session> getAccount2Session() {
        return account2Session;
    }

    public void setAccount2Session(Map<String, Session> account2Session) {
        this.account2Session = account2Session;
    }

    public AbstractInitialPositionHandler getPositionHandlerByType(MapType mapType) {
        return type2PositionHandler.get(mapType);
    }

    public void setType2PositionHandler(Map<MapType, AbstractInitialPositionHandler> type2PositionHandler) {
        this.type2PositionHandler = type2PositionHandler;
    }
}
