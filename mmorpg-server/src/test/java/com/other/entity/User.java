package com.other.entity;

import javax.persistence.*;

@Entity
@Table(name="t_user")
@NamedQueries({
        @NamedQuery(name="findAllUser",query = "select u from User u"),
        @NamedQuery(name="findUserById",query="select u from User u where u.id = ?1"),
        @NamedQuery(name="findUserByName",query = "select u from User u where u.name = :name")
})
public class User {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "password")
    private String password;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
