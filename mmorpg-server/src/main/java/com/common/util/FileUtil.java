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
}
