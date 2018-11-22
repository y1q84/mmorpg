package com.other.ExcelReadTest;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.List;

/**
 * author:ydx
 * create 2018\11\3 0003
 */
public class Test {
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Administrator\\Desktop\\table\\Monster.xlsx");
        FileInputStream in = null;
        try {
            in = new FileInputStream(file);
            System.out.println("输入流的内容为："+in);
            List<ExcelHead> excelHeads = new ArrayList<ExcelHead>();
            ExcelHead excelHead = new ExcelHead("姓名", "name");
            ExcelHead excelHead1 = new ExcelHead("性别", "sex");
            ExcelHead excelHead2 = new ExcelHead("年龄", "age");
            ExcelHead excelHead3 = new ExcelHead("地址", "address", true);
            excelHeads.add(excelHead);
            excelHeads.add(excelHead1);
            excelHeads.add(excelHead2);
            excelHeads.add(excelHead3);
            List<ExcelUser> list = ExcelUtils.readExcelToEntity(ExcelUser.class, in, file.getName(), excelHeads);
            for (ExcelUser excelUser : list) {
                System.out.println(excelUser.getName() + ":" + excelUser.getSex() + ":" + excelUser.getAge() + ":" + excelUser.getAddress());
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if(in!=null) {
                try {
                    in.close();
                }catch(Exception e){
                    e.printStackTrace();
                }
            }
        }
    }

}
