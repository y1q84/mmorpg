package com.module.logic.player.entity;

import com.common.annotation.IdCreateStrategy;
import com.common.persist.IEntity;
import com.module.logic.player.Player;
import com.module.logic.player.logic.position.MapType;
import com.module.logic.player.type.RoleType;

import javax.persistence.*;

/**
 * author:ydx
 * create 2018\10\21 0021
 */
@Entity
@NamedQueries({
        @NamedQuery(name="findPlayerByAccount", query="select p from PlayerEntity p where p.account=?1"),
        @NamedQuery(name="findPlayerEntityById", query="select p from PlayerEntity p where p.playerId=?1"),
        @NamedQuery(name="findPlayerEntityByName", query="select p from PlayerEntity p where p.playerName=?1")
})
public class PlayerEntity implements IEntity<Long> {

    @Id
    @Column
    @IdCreateStrategy("snowflakeid")
    private long playerId;
    @Column
    private String account;
    @Column
    private String playerName;
    @Column
    private RoleType roleType;
    @Column
    private String sex;
    @Column
    private int level=1;
    @Column
    private int hp=100;//血量
    @Column
    private int mp=100;//蓝量
    @Column
    private long exp=1000;//经验

    @Column
    private long gold=100;

    @Column
    private long mapId;
    @Column
    private MapType mapType;

    //如果不加，会创建改字段对应的列
    @Transient
    private Player player;

    public long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(long playerId) {
        this.playerId = playerId;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public RoleType getRoleType() {
        return roleType;
    }

    public void setRoleType(RoleType roleType) {
        this.roleType = roleType;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public int getMp() {
        return mp;
    }

    public void setMp(int mp) {
        this.mp = mp;
    }

    public long getExp() {
        return exp;
    }

    public void setExp(long exp) {
        this.exp = exp;
    }

    public long getGold() {
        return gold;
    }

    public void setGold(long gold) {
        this.gold = gold;
    }

    public long getMapId() {
        return mapId;
    }

    public void setMapId(long mapId) {
        this.mapId = mapId;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public MapType getMapType() {
        return mapType;
    }

    public void setMapType(MapType mapType) {
        this.mapType = mapType;
    }

    @Override
    public Long getId() {
        return this.playerId;
    }

    @Override
    public void setId(Long id) {
        this.playerId=id;
    }

}
