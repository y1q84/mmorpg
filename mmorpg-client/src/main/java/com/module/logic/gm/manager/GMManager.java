package com.module.logic.gm.manager;

import com.module.logic.gm.AbstractGMCommand;
import com.module.logic.gm.GMType;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class GMManager {

    //用于存放gm命令类型和gm命令对象的集合
    private Map<GMType, AbstractGMCommand> commandMap=new HashMap<>();

    public void registerCommand(AbstractGMCommand command){
        commandMap.put(command.getType(),command);
    }

    public boolean dealWithCommand(String content){

        for(Map.Entry<GMType,AbstractGMCommand> entry:commandMap.entrySet()){
            GMType type=entry.getKey();
            AbstractGMCommand command=entry.getValue();

            String[] arr=content.split("\\s");

            if(arr.length==0){
                return false;
            }

            //输入字符串第一个空格前部分为命令类型
            if(arr[0].equalsIgnoreCase(type.name())){
                String pattern=command.getPattern();
                Pattern p = Pattern.compile(pattern);
                Matcher matcher = p.matcher(content);

                if(command.isMatch(p,matcher,content)){
                    List<String> list=command.params(matcher,content);
                    command.execute(null,list);
                    return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        ApplicationContext applicationContext=new ClassPathXmlApplicationContext("applicationContext.xml");
        GMManager gmManager=applicationContext.getBean(GMManager.class);
        System.out.println("++++++++++++++++"+gmManager);

        System.out.println("请输入：");
        Scanner input=new Scanner(System.in);
        String content=input.nextLine();
        gmManager.dealWithCommand(content);

    }

}
