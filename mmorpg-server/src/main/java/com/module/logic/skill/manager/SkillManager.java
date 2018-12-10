package com.module.logic.skill.manager;

import com.common.resource.provider.ResourceProvider;
import com.common.resource.provider.StaticResourceProvider;
import com.module.logic.skill.resource.SkillResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class SkillManager {

    @Autowired
    private ResourceProvider<SkillResource,Integer> resourceProvider;

    private Map<Integer, SkillResource> id2SkillResource=new HashMap<>();
    private static SkillManager self;

    @PostConstruct
    public void init(){
        self=this;
        StaticResourceProvider s=((StaticResourceProvider)resourceProvider);
        s.reload();
        List<SkillResource> list=s.getList();
        for(SkillResource skillResource:list){
            id2SkillResource.put(skillResource.getSkillId(),skillResource);
        }
    }

    public static SkillManager getInstance(){
        return self;
    }

    public Map<Integer, SkillResource> getId2SkillResource() {
        return id2SkillResource;
    }

    public SkillResource getSkillResourceById(int skillId){
        return id2SkillResource.get(skillId);
    }

    public void setId2SkillResource(Map<Integer, SkillResource> id2SkillResource) {
        this.id2SkillResource = id2SkillResource;
    }
}
