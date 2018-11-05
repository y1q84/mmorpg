package com.common.resource.read;

import com.common.resource.data.ResourceDataObject;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.xmlbeans.impl.piccolo.io.FileFormatException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

@Component
public class ReadExcel implements ReadResource {

    Logger logger=LoggerFactory.getLogger(ReadExcel.class);

    @Override
    public String getSuffix() {
        return null;
    }

    @Override
    public Map read(ResourceDataObject resourceDataObject) {
        Map<Object,Object> map=new HashMap<>();
        //读取资源数组
        Resource[] resources=resourceDataObject.getResources();
        //获取资源类
        Class resourceClass=resourceDataObject.getResourceClass();
        //遍历资源数组
        for(Resource resource:resources){
            //用于读取excel表的对象，workbook:工作簿
            //HSSFWorkbook:是操作Excel2003以前（包括2003）的版本，扩展名是.xls；
            //XSSFWorkbook:是操作Excel2007的版本，扩展名是.xlsx；
            XSSFWorkbook xssFWorkbook=null;
            try{
                xssFWorkbook=new XSSFWorkbook(resource.getInputStream());
            }catch (Exception e){
                e.printStackTrace();
            }
            //用来保存表中每一项与资源类属性字段的映射
            Map<Integer, Field> keys=null;
            //判断是否可以读取数据
            boolean isReadData=false;
            //存放主键
            Field key=null;

            //工作簿的页数
            int numOfSheets=xssFWorkbook.getNumberOfSheets();
            //遍历工作簿的所有页
            for(int i=0;i<numOfSheets;i++){
                XSSFSheet sheet=xssFWorkbook.getSheetAt(i);
                //获取每页的行数
                int rowNum=sheet.getLastRowNum();
                //遍历所有行
                //注：第一行不是数据，只是与资源类的属性对应
                for(int j=0;j<rowNum;j++){
                    Row row=sheet.getRow(j);
                    if(row==null){
                        continue;
                    }
                    //获取第一个单元格，第一个单元格只是用来区分，客户端/服务端
                    Cell cell=row.getCell(0);
                    //照理来说第一行的第一个单元格就是服务端的标识
                    if(cell!=null&&"SERVER".equalsIgnoreCase(cell.getStringCellValue())){
                        //将表头的每一项与资源类的属性字段对应起来
                        for(int k=1;k<=row.getLastCellNum();k++){
                            cell=row.getCell(k);
                            if(cell==null){
                                continue;
                            }
                            //设置单元格类型为字符串
                            cell.setCellType(CellType.STRING);
                            String value=cell.getStringCellValue();
                            Field field=null;
                            if(!StringUtils.isEmpty(value)){
                                try{
                                    //单元格的值为资源类属性的名字
                                    //由单元格的值获取资源类对应的field对象
                                    field=resourceClass.getDeclaredField(value);
                                    field.setAccessible(true);
                                    //存放单元格下标(1开始)与字段的映射，for what?
                                    //因为除了第一行0下标有值，其他都没有
                                    //用在下面读取数据部分
                                    keys.put(k,field);
                                }catch (Exception e){
                                    e.printStackTrace();
                                    logger.error(String.format("该属性字段%s不存在...",field.getName()));
                                }
                            }

                            //判断主键是否存在
                            boolean isKey=false;
                            if(resourceDataObject.getKeyName().equalsIgnoreCase(value)){
                                key=field;
                                isKey=true;
                            }
                            if(!isKey){
                                throw new RuntimeException(String.format("配置文件%s缺少主键%s",resourceDataObject.getTotalPath(),resourceDataObject.getFileName()));
                            }

                        }

                        isReadData=true;
                        //不再往下执行开始第二行
                        continue;
                    }

                    //读取数据
                    if((isReadData) && (keys!=null) && (keys.size()>0)){
                        Object object=null;
                        try{
                            object=resourceClass.newInstance();
                            for(Map.Entry<Integer,Field> entry:keys.entrySet()){
                                //获取下标从1开始单元格
                                cell=row.getCell(entry.getKey());
                                if(cell==null){
                                    continue;
                                }
                                cell.setCellType(CellType.STRING);
                                //获取单元格的值
                                String v=cell.getStringCellValue();
                                //获取资源类的属性对象
                                Field f=entry.getValue();
                                //将指定对象变量上此Field 对象表示的字段设置为指定的新值
                                //将key转为字段的返回类型
                                f.set(object,v);
                            }
                            //判断主键是否存在
                            Object keyObj=key.get(object);
                            if(keyObj==null){
                                throw new FileFormatException(String.format("配置文件%s，第%s行，缺少主键%s",resourceDataObject.getTotalPath(),j+1,resourceDataObject.getKeyName()));
                            }
                            //建立 “主键对象” 与 “资源类对象” 的映射
                            map.put(keyObj,object);
                        }catch (Exception e){
                            e.printStackTrace();
                            logger.error("对象创建失败...");
                        }
                    }

                }
            }
        }
        return map;
    }

}
