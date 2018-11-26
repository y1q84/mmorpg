package com.module.logic.account.entity;

import com.common.annotation.IdCreateStrategy;
import com.common.persist.IEntity;
import com.common.util.JsonStringType;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.util.List;

@Entity
@TypeDef(name = "json", typeClass = JsonStringType.class)
@NamedQueries({
        @NamedQuery(name = "findAccountEntityByAccount", query = "select a from AccountEntity a where a.account=?1"),
        @NamedQuery(name="findAccountEntityByAccountAndPass", query="select a from AccountEntity a where  a.account=?1 and a.password=?2")
})
public class AccountEntity implements IEntity<String> {

    @Id
    @Column
    @IdCreateStrategy
    private String id;

    @Column
    private String account;

    @Column
    private String password;

    @Type(type = "json")
    private List<Long> ids;

    @Override
    public String getId() {
        return id;
    }

    @Override
    public void setId(String s) {
        this.id=s;
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

    public void addIds(long id) {
        this.ids.add(id);
    }
}
