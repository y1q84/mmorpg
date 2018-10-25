package com.common.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;

public class FileUtil {

    private static Logger logger= LoggerFactory.getLogger(FileUtil.class);

    public static boolean createFile(File file) throws Exception{

        if(!file.exists()){
            if(!file.getParentFile().exists()){
                createMkdir(file);
            }
        }

        return file.createNewFile();
    }

    public static void createMkdir(File file){
        if(!file.getParentFile().exists()){
            createMkdir(file.getParentFile());
        }
        file.mkdir();
    }

    public static void deleteAllFiles(File root) {
        File files[] = root.listFiles();
        if (files != null){
            for (File f : files) {
                if (f.isDirectory()) { // 判断是否为文件夹
                    deleteAllFiles(f);
                    try {
                        f.delete();
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                } else {
                    if (f.exists()) { // 判断是否存在
                        deleteAllFiles(f);
                        try {
                            f.delete();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                }
            }
        }
    }

}
