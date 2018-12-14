package com.module.logic.player.service;

import com.module.logic.player.Player;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath*:applicationContext.xml"})
public class PlayerServiceTest {
    @Autowired
    private PlayerService playerService;

    @Test
    public void test(){
        Player player=new Player();
        player.setMp(100);
        playerService.onLogin(player);
    }

}