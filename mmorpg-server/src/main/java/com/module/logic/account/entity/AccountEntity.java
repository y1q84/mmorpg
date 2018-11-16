package com.module.logic.account.entity;

import com.common.persist.IEntity;
import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.List;

@Entity
public class AccountEntity implements IEntity<String> {

    @Id
    @Column
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
