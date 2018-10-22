package com.common.util;

import com.baidu.bjf.remoting.protobuf.ProtobufIDLGenerator;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPaket;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.FileWriter;
import java.lang.annotation.Annotation;

public class ProtoFileUtil {

    private static Logger logger= LoggerFactory.getLogger(ProtoFileUtil.class);

    public static void creatProtoFile(AbstractPaket abstractPaket){
        /**
         * 在此处增加生成.proto文件的处理
         */
        StringBuilder builder=new StringBuilder();
        String code = ProtobufIDLGenerator.getIDL(abstractPaket.getClass(),null,null,true);
        //在具体包面前加上DescriptePacket注解用于描述该类
        Annotation descriptePacket=abstractPaket.getClass().getAnnotation(DescriptePacket.class);
        if(descriptePacket!=null){
            String des=((DescriptePacket) descriptePacket).description();
            if(des!=null){

                builder.append("//"+des);
                builder.append("\n"+code);

                //将文件生成到指定位置
                //File file=new File("C:\\mmorpg\\mmorpg\\mmorpg-browser\\mmorpg-browser\\src\\app\\proto\\"+abstractPaket.getPacketId()+"_"+abstractPaket.getClass().getSimpleName()+"_"+des+".proto");
                File file=new File("C:\\proto2packet\\protobuf-egret\\egret-project\\protobuf\\protofile\\"+abstractPaket.getPacketId()+"_"+abstractPaket.getClass().getSimpleName()+"_"+des+".proto");
                try{

                    boolean result=FileUtil.createFile(file);
                    if(result){
                        FileWriter fileWriter=new FileWriter(file);
                        fileWriter.write(builder.toString());//往文件写内容
                        fileWriter.flush();
                        fileWriter.close();
                        logger.info("生成文件：{}"+file.getAbsolutePath());
                    }

                }catch (Exception e){
                    e.printStackTrace();
                    logger.error("文件创建失败...");
                }

            }
        }
       // logger.info("生成的proto文件：\n"+builder);

    }
}
