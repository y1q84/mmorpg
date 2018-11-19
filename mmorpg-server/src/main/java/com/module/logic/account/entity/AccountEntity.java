package com.module.logic.account.entity;

import com.common.annotation.IdCreateStrategy;
import com.common.persist.IEntity;
import com.common.util.JsonStringType;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.List;

@Entity
@TypeDef(name = "json", typeClass = JsonStringType.class)
public class AccountEntity implements IEntity<String> {

    @Id
    @Column
    @IdCreateStrategy
    private String playerId;

    @Column
    private String account;

    @Column
    private String password;

    @Type(type = "json")
    private List<Long> ids;

    @Override
    public String getId() {
        return playerId;
    }

    @Override
    public void setId(String s) {
        this.playerId=s;
    }

    public String getPlayerId() {
        return playerId;
    }

    public void setPlayerId(String playerId) {
        this.playerId = playerId;
    }

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

    public List<Long> getIds() {
        return ids;
    }

    public void setIds(List<Long> ids) {
        this.ids = ids;
    }
}
