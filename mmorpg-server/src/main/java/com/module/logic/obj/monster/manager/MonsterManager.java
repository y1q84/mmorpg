package com.module.logic.obj.monster.manager;

import com.common.resource.provider.ResourceProvider;
import com.common.resource.provider.StaticResourceProvider;
import com.module.logic.obj.monster.resource.Follower;
import com.module.logic.obj.monster.resource.Monster;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

@Component
public class MonsterManager {

    @Autowired
    private ResourceProvider<Monster,Long> resourceProvider;

    public ResourceProvider<Monster,Long> getResourceProvider() {
        return resourceProvider;
    }

    @PostConstruct
    public void init(){
        System.out.println("staticResourceProvider为空否？"+resourceProvider);
        StaticResourceProvider s=((StaticResourceProvider)resourceProvider);
        s.reload();
        List<Monster> list=s.getList();
        for(int i=0;i<list.size();i++){
            System.out.println("id:"+list.get(i).getId()+"\t\t,name:"+list.get(i).getName());
            List<Follower> follows=list.get(i).getFollows();
            if(follows!=null){
                for(int j=0;j<follows.size();j++){
                    long id=(follows.get(j)).getId();
                    int num=follows.get(j).getNumber();
                    System.out.println("\t\t小兵id:"+id+"\t\t数量:"+num);
                }
            }
        }
    }

//    public static void main(String[] args) {
//
//        ApplicationContext ac=new ClassPathXmlApplicationContext("applicationContext.xml");
//        StaticResourceProviderManager bean = ac.getBean(StaticResourceProviderManager.class);
//        MonsterManager monsterManager=ac.getBean(MonsterManager.class);
//        StaticResourceProvider staticResourceProvider=(StaticResourceProvider)monsterManager.resourceProvider;
//        List<Monster> list=staticResourceProvider.getList();
//        for(int i=0;i<list.size();i++){
//            System.out.println("id:"+list.get(i).getId()+"\t\t,name:"+list.get(i).getName());
//            List<Follower> follows=list.get(i).getFollows();
//            if(follows!=null){
//                for(int j=0;j<follows.size();j++){
//                    long id=(follows.get(j)).getId();
//                    int num=follows.get(j).getNumber();
//                    System.out.println("\t\t小兵id:"+id+"\t\t数量:"+num);
//                }
//            }
//        }
//    }
}
