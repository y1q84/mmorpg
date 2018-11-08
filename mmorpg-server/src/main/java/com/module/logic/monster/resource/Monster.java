package com.module.logic.monster.resource;

import com.common.resource.ResourceDefaultFormat;
import com.common.resource.annotation.Id;
import com.common.resource.annotation.Resources;
import com.common.resource.data.ResourceDataObject;
import com.common.resource.read.ReadExcel;

import java.util.List;

@Resources(suffix = "xlsx",path = "resource")
public class Monster {
    @Id
    private long id;
    private String name;
    private int hp;
    private List<Follower> follows;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public List<Follower> getFollows() {
        return follows;
    }

    public void setFollows(List<Follower> follows) {
        this.follows = follows;
    }

    public static void main(String[] args) {
        ResourceDataObject rd=ResourceDataObject.valueOf(Monster.class,new ResourceDefaultFormat());
        ReadExcel readExcel=new ReadExcel();
        List<Monster> list=readExcel.read(rd);
        System.out.println("集合大小为："+list.size());
        for(Monster m: list){
            System.out.println("怪物id:"+m.getId()+",\t名称："+m.getName()+",\t\t血量："+m.getHp()+"\n追随者，");
            if(m.follows!=null){
//                for(Map.Entry<Integer,Integer> entry:m.getFollows().entrySet()){
//                    System.out.println("\t\t小兵id："+entry.getKey()+"\t\t数量"+entry.getValue());
//                }
                for(int i=0;i<m.getFollows().size();i++){
                    long id=(m.getFollows().get(i)).getId();
                    int num=m.getFollows().get(i).getNumber();
                    System.out.println("\t\t小兵id:"+id+"\t\t数量:"+num);
                }
            }
        }
    }
}
