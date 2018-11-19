package com.common.identify;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

/**
 * snowflake ID 算法(雪花算法)是 twitter 使用的唯一 ID 生成算法，
 * 为了满足 Twitter 每秒上万条消息的请求，使每条消息有
 * 唯一、有一定顺序的 ID ，且支持分布式生成
 */
@Component
public class SnowflakeGeneratorStrategy implements GeneratorStrategy<Long>{
    //用当前时间的时间戳作为
    private final long twepoch=1540797390510L;
    // 服务id位数
    private final static long serverIdBits = 10L;
    // 序列号识位数
    private final static long sequenceBits = 12L;

    // 服务ID最大值
    private final static long maxServerId = -1L ^ (-1L << serverIdBits);
    // 序列号ID最大值
    private final static long maxSequenceId = -1L ^ (-1L << sequenceBits);

    // 服务ID偏左移12位
    private final static long serverIdShift = sequenceBits;
    // 时间毫秒左移22位
    private final static long timestampLeftShift = sequenceBits + serverIdBits;

    private long sequence = 0L;
    @Value("${serverId}")
    private long serverId;
    private static long lastTimestamp = -1L;

    private static SnowflakeGeneratorStrategy self;

    public static SnowflakeGeneratorStrategy getInstance(){
        return self;
    }

    @PostConstruct
    public void init() {
        // 如果超出范围就抛出异常
        if (serverId > maxServerId || serverId < 0) {
            throw new IllegalArgumentException(String.format("服务id超出范围:%d",serverId));
        }
        self=this;
    }

    public synchronized Long createUniqueId() {

        long timestamp = System.currentTimeMillis();
        if (timestamp < lastTimestamp) {
            try {
                throw new Exception(String.format("上次时间戳%d>%d",lastTimestamp,timestamp));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        //如果上次生成时间和当前时间相同,在同一毫秒内
        if (lastTimestamp == timestamp) {
            //sequence自增，因为sequence只有10bit，所以和maxSequenceId相与一下，去掉高位
            sequence = (sequence + 1) & maxSequenceId;
            //判断是否溢出,也就是每毫秒内超过2^10=1024，当为1024时，与maxSequenceId相与，sequence就等于0
            if (sequence == 0) {
                //自旋等待到下一毫秒
                timestamp = nextMillisTime(lastTimestamp);
            }
        } else {
            // 如果和上次生成时间不同,重置sequence，就是下一毫秒开始，sequence计数重新从0开始累加
            sequence = 0L;
        }

        lastTimestamp = timestamp;
        System.out.println("时间想减："+((timestamp - twepoch)<<timestampLeftShift)+"\t服务id:"+ (serverId << serverIdShift)+"\t序列号："+sequence);
        return ((timestamp - twepoch) << timestampLeftShift) | (serverId << serverIdShift) | sequence;
    }

    // 防止产生的时间比之前的时间还要小（由于NTP回拨等问题）,保持增量的趋势.
    private long nextMillisTime(final long lastTimestamp) {
        long timestamp = System.currentTimeMillis();
        while (timestamp <= lastTimestamp) {
            timestamp = System.currentTimeMillis();
        }
        return timestamp;
    }

    @Override
    public String getType() {
        return "snowflakeid";
    }

    public static void main(String[] args) {

        ApplicationContext ac=new ClassPathXmlApplicationContext("applicationContext.xml");
        SnowflakeGeneratorStrategy uk=ac.getBean(SnowflakeGeneratorStrategy.class);
        System.out.println("ukid:"+uk.serverId);
        for(int i=0;i<2;i++){
            new Thread(new Runnable() {
                @Override
                public void run() {
                    for(int j=0;j<1000;j++){
                        System.out.println(uk.createUniqueId());
                    }
                }
            }).start();
            //System.out.println(uk.createUniqueId());
        }
    }

}
