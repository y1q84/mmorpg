package com.module.logic.gm.impl;

import com.module.logic.gm.AbstractGMCommand;
import com.module.logic.gm.GMResultMessage;
import com.module.logic.gm.GMType;
import com.module.player.entity.Player;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class GMMoveCommand  extends AbstractGMCommand {

    public final static String PATTERN="^move\\s([a-z]+)\\s([a-z]+)$";

    public GMMoveCommand(){
        setType(GMType.MOVE);
    }

    @Override
    public String getPattern() {
        return PATTERN;
    }

    @Override
    public String help() {
        return "场景移动CM命令";
    }

    @Override
    public GMResultMessage execute(Player player, List<String> params) {

        String type=params.get(1);
        System.out.println("移动到的目标地方为："+type);

        return null;
    }

//    public static void main(String[] args) {
//        System.out.println("请输入：");
//        Scanner input=new Scanner(System.in);
//        String content=input.nextLine();
//
//        GMMoveCommand moveCommand=new GMMoveCommand();
//
//        Pattern r = Pattern.compile(PATTERN);
//        Matcher matcher = r.matcher(content);
//        if(moveCommand.isMatch(r,matcher,content)){
//            List<String> list=moveCommand.params(matcher,content);
//            System.out.println(list.size());
//            moveCommand.execute(null,list);
//        }
//
//    }
}
