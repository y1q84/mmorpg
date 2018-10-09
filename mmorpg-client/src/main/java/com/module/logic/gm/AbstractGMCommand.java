package com.module.logic.gm;

import com.module.logic.gm.manager.GMManager;
import com.module.player.entity.Player;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public abstract class AbstractGMCommand {

    private GMType type;

    public GMType getType() {
        return type;
    }

    public void setType(GMType type) {
        this.type = type;
    }

    @Autowired
    private GMManager gmManager;

    @PostConstruct
    public void init(){
        gmManager.registerCommand(this);
    }


    public abstract String getPattern();

    public abstract String help();

    public boolean isMatch(Pattern pattern, Matcher matcher,String content){
        //System.out.println("匹配成功否？"+matcher.matches());
        return matcher.matches();
    }

    public List<String> params(Matcher matcher, String message) {
        List<String> params = new ArrayList<>();
        for (int i=1; i<matcher.groupCount()+1; i++) {
            params.add(matcher.group(i));
        }
        return params;
    }

    public abstract GMResultMessage execute(Player player, List<String> params);
}
