package com.common.thread;

import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;


public class DispatchHandlerExecutor {

    private ScheduledExecutorService[] threadPool;


    //注意：由于没有默认构造方法，直接这样是创建不了bean的，需要在appicationContext.xml文件中进行配置
    public DispatchHandlerExecutor(int size){
        this.threadPool=new ScheduledExecutorService[size];
        for(int i=0;i<size;i++){
            threadPool[i]= Executors.newSingleThreadScheduledExecutor();
        }
    }

    /**
     *添加同步任务
     */
    public Future submit(AbstractTask task){
        ScheduledExecutorService executorService=getScheduledExecutorService(task.getDispatchHashCode());
        return executorService.submit(task);
    }

    /**
     * 添加延时任务
     */
    public Future schedule(AbstractTask task, long delay, TimeUnit unit){
        ScheduledExecutorService executorService=getScheduledExecutorService(task.getDispatchHashCode());
        return executorService.schedule(task,delay,unit);
    }

    /**
     * 添加定时任务(周期执行)
     * @param task 执行线程
     * @param initialDelay 初始化延时
     * @param period 两次开始执行最小间隔时间
     * @param unit 计时单位
     * @return
     */
    public Future scheduleAtFixedRate(AbstractTask task, long initialDelay, long period, TimeUnit unit){
        ScheduledExecutorService executorService=getScheduledExecutorService(task.getDispatchHashCode());
        return executorService.scheduleAtFixedRate(task,initialDelay,period,unit);
    }

    /**
     * 添加延迟定时任务(周期执行)
     * @param task 执行线程
     * @param initialDelay 初始化延时
     * @param delay 前一次执行结束到下一次执行开始的间隔时间
     * @param unit 计时单位
     * @return
     */
    public Future scheduleWithFixedDelay(AbstractTask task, long initialDelay, long delay, TimeUnit unit){
        ScheduledExecutorService executorService=getScheduledExecutorService(task.getDispatchHashCode());
        return executorService.scheduleWithFixedDelay(task,initialDelay,delay,unit);
    }


    public ScheduledExecutorService getScheduledExecutorService(int hashCode){
        return threadPool[hashCode%threadPool.length];
    }

}
