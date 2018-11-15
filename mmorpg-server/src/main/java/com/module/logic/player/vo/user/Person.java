package com.module.logic.player.vo.user;

import com.common.persist.IEntity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name="T_PERSONS")
public class Person implements Serializable, IEntity<Long> {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;
    private double age;
    private Date birth;

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="ID",unique=true)
    public Long getId() {
        return id;
    }

    @SuppressWarnings("unused")
    public void setId(Long id) {
        this.id = id;
    }

    @Column(name="NAME",length=20)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name="AGE")
    public double getAge() {
        return age;
    }

    public void setAge(double age) {
        this.age = age;
    }

    @Temporal(TemporalType.DATE)
    @Column(name="BIRTH_DATE")
    public Date getBirth() {
        return birth;
    }
    public void setBirth(Date birth) {
        this.birth = birth;
    }

}

