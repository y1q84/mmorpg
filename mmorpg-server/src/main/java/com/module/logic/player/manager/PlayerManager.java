package com.module.logic.player.manager;

import com.common.persist.CacheEntityProvider;
import com.common.persist.EntityProvider;
import com.common.resource.provider.ResourceProvider;
import com.common.session.Session;
import com.google.common.collect.BiMap;
import com.google.common.collect.HashBiMap;
import com.module.logic.account.entity.AccountEntity;
import com.module.logic.account.manager.AccountManager;
import com.module.logic.map.manager.MapManager;
import com.module.logic.player.Player;
import com.module.logic.player.entity.PlayerEntity;
import com.module.logic.player.logic.position.MapType;
import com.module.logic.player.logic.position.handler.AbstractInitialPositionHandler;
import com.module.logic.player.resource.PlayerPositionResource;
import com.module.logic.player.type.RoleType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
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
    private ResourceProvider<PlayerPositionResource, RoleType> resourceProvider;
    @Autowired
    private EntityProvider<PlayerEntity,Long> entityProvider;

    @PostConstruct
    public void init(){
        self=this;
    }
    public static PlayerManager getInstance(){
        return self;
    }

    public PlayerEntity createPlayerEntity(String account, String name, RoleType roleType,String sex){
        PlayerEntity playerEntity=new PlayerEntity();
        playerEntity.setAccount(account);
        playerEntity.setPlayerName(name);
        playerEntity.setRoleType(roleType);
        playerEntity.setSex(sex);
        return playerEntity;
    }

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

    public boolean roleLogin(long playerId){
        PlayerEntity playerEntity= (PlayerEntity) ((CacheEntityProvider)entityProvider).get(playerId);
        if(playerEntity!=null){
            return true;
        }
        return false;
    }

    //在登录的时候添加
    public void addSession2Player(Session session,Player player){
        //TODO 这里需要考虑一个问题就是判断玩家是否已经登录，如果已经登录则需要将之踢下线
        if(account2Session.size()>0){
            Session oldSession=account2Session.get(player.getPlayerEntity().getAccount());
            if(oldSession!=null){
                //将之踢下线
                //在地图上消失
                MapManager.getInstance().removeFromMap(player);
                // TODO 玩家下线的其他操作
            }
        }
        //设置新的session
        account2Session.put(player.getPlayerEntity().getAccount(),session);
        player2session.put(player,session);
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

    public PlayerEntity findPlayerEntity(long playerId){
        CacheEntityProvider cacheEntityProvider=(CacheEntityProvider)entityProvider;
//        cacheEntityProvider.loadOrCreate(playerId, new ICreator() {
//            @Override
//            public Object create(Object o) {
//                PlayerEntity playerEntity=new PlayerEntity();
//                playerEntity.setPlayerId((long)o);
//                return playerEntity;
//            }
//        });
        List<PlayerEntity> list=cacheEntityProvider.query("findPlayerEntityById",playerId);
        return list.get(0);
    }

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
