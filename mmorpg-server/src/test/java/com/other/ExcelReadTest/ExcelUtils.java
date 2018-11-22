package com.other.ExcelReadTest;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * author:ydx
 * create 2018\11\3 0003
 */
public class ExcelUtils {
    private static final String FULL_DATA_FORMAT = "yyyy/MM/dd  HH:mm:ss";
    private static final String SHORT_DATA_FORMAT = "yyyy/MM/dd";


    /**
     * Excel表头对应Entity属性 解析封装javabean
     *
     * @param classzz    类
     * @param in         excel流
     * @param fileName   文件名
     * @param excelHeads excel表头与entity属性对应关系
     * @param <T>
     * @return
     * @throws Exception
     */
    public static <T> List<T> readExcelToEntity(Class<T> classzz, InputStream in, String fileName, List<ExcelHead> excelHeads) throws Exception {
        checkFile(fileName);    //是否EXCEL文件
        Workbook workbook = getWorkBoot(in, fileName); //兼容新老版本
        List<T> excelForBeans = readExcel(classzz, workbook, excelHeads);  //解析Excel
        return excelForBeans;
    }

    /**
     * 解析Excel转换为Entity
     *
     * @param classzz  类
     * @param in       excel流
     * @param fileName 文件名
     * @param <T>
     * @return
     * @throws Exception
     */
    public static <T> List<T> readExcelToEntity(Class<T> classzz, InputStream in, String fileName) throws Exception {
        return readExcelToEntity(classzz, in, fileName,null);
    }

    /**
     * 校验是否是Excel文件
     *
     * @param fileName
     * @throws Exception
     */
    public static void checkFile(String fileName) throws Exception {
        if (!StringUtils.isEmpty(fileName) && !(fileName.endsWith(".xlsx") || fileName.endsWith(".xls"))) {
            throw new Exception("不是Excel文件！");
        }
    }

    /**
     * 兼容新老版Excel
     *
     * @param in
     * @param fileName
     * @return
     * @throws IOException
     */
    private static Workbook getWorkBoot(InputStream in, String fileName) throws IOException {
        if (fileName.endsWith(".xlsx")) {
            XSSFWorkbook xssfWorkbook=new XSSFWorkbook(in);
            return xssfWorkbook;
        } else {
            return new HSSFWorkbook(in);
        }

    }

    /**
     * 解析Excel
     *
     * @param classzz    类
     * @param workbook   工作簿对象
     * @param excelHeads excel与entity对应关系实体
     * @param <T>
     * @return
     * @throws Exception
     */
    private static <T> List<T> readExcel(Class<T> classzz, Workbook workbook, List<ExcelHead> excelHeads) throws Exception {
        List<T> beans = new ArrayList<T>();
        // 循环每一页，并处理当前循环页
        int sheetNum = workbook.getNumberOfSheets();
        System.out.println("页数为："+sheetNum);
        for (int sheetIndex = 0; sheetIndex < sheetNum; sheetIndex++) {
            // HSSFSheet 标识某一页
            Sheet sheet = workbook.getSheetAt(sheetIndex);
            //获取当前页的名字
            String sheetName=sheet.getSheetName();
            System.out.println("当前页名称为:"+sheetName);
            // 获取第一个实际行的下标
            int firstRowNum = sheet.getFirstRowNum();
            // 获取最后一个实际行的下标
            int lastRowNum = sheet.getLastRowNum();
            //获取第一行
            Row head = sheet.getRow(firstRowNum);
            if (head == null)
                continue;
            // 获取在某行第一个单元格的下标
            short firstCellNum = head.getFirstCellNum();
            //获取列数，比最后一列列标大1
            short lastCellNum = head.getLastCellNum();
            //获取类的所有字段
            Field[] fields = classzz.getDeclaredFields();
            //根据行下标遍历所有行
            for (int rowIndex = firstRowNum + 1; rowIndex <= lastRowNum; rowIndex++) {
                //根据行下标获取对应行对象
                Row dataRow = sheet.getRow(rowIndex);
                if (dataRow == null)
                    continue;
                T instance = classzz.newInstance();
                if(CollectionUtils.isEmpty(excelHeads)){  //非头部映射方式，默认不校验是否为空，提高效率
                    firstCellNum=dataRow.getFirstCellNum();
                    lastCellNum=dataRow.getLastCellNum();
                }
                //根据行下标遍历对应的单元格下标
                for (int cellIndex = firstCellNum; cellIndex < lastCellNum; cellIndex++) {
                    //head为第一行
                    //根据单元格下标获取对应的单元格
                    Cell headCell = head.getCell(cellIndex);
                    if (headCell == null)
                        continue;
                    //dataRow为根据行下标获取对应的数据行对象
                    //获取数据行的单元格
                    Cell cell = dataRow.getCell(cellIndex);
                    //数据头的单元格
                    headCell.setCellType(Cell.CELL_TYPE_STRING);
                    String headName = headCell.getStringCellValue().trim();
                    if (StringUtils.isEmpty(headName)) {
                        continue;
                    }
                    ExcelHead eHead = null;
                    //判断数据头所有项的集合
                    //excelHeads对象有excelName:Excel表中的头信息,entityName：实体类的各字段
                    if (!CollectionUtils.isEmpty(excelHeads)) {
                        for (ExcelHead excelHead : excelHeads) {
                            if (headName.equals(excelHead.getExcelName())) {
                                eHead = excelHead;
                                //赋JavaBean的属性名
                                headName = eHead.getEntityName();
                                break;
                            }
                        }
                    }
                    //遍历类的所有字段：姓名、性别、年龄、地址
                    //name age sex address
                    //ExcelUser:name age sex address
                    for (Field field : fields) {
                        if (headName.equalsIgnoreCase(field.getName())) {
                            //拼凑成属性名set+首字母大写的字段名
                            String methodName = MethodUtils.setMethodName(field.getName());
                            //根据属性名和属性类型获取对应的Method对象
                            Method method = classzz.getMethod(methodName, field.getType());
                            if (isDateFied(field)) {
                                Date date=null;
                                if(cell!=null){
                                    date=cell.getDateCellValue();
                                }
                                if (date == null) {
                                    //判断该字段是否必须，是则break
                                    volidateValueRequired(eHead,sheetName,rowIndex);
                                    break;
                                }
                                //相当于：instance.setMethodName(cell.getDateCellValue());
                                method.invoke(instance, cell.getDateCellValue());
                            } else {
                                String value = null;
                                if(cell!=null){
                                    cell.setCellType(Cell.CELL_TYPE_STRING);
                                    value=cell.getStringCellValue();
                                }
                                if (StringUtils.isEmpty(value)) {
                                    volidateValueRequired(eHead,sheetName,rowIndex);
                                    break;
                                }
                                //instance.setMethodName(type value)
                                method.invoke(instance, convertType(field.getType(), value.trim()));
                            }
                            break;
                        }
                    }
                 }
                beans.add(instance);
            }
        }
        return beans;
    }
    /**
     * 是否日期字段
     *
     * @param field
     * @return
     */
    private static boolean isDateFied(Field field) {
        return (Date.class == field.getType());
    }
    /**
     * 空值校验
     *
     * @param excelHead
     * @throws Exception
     */
    private static void volidateValueRequired(ExcelHead excelHead,String sheetName,int rowIndex) throws Exception {
        if (excelHead != null && excelHead.isRequired()) {
            throw new Exception("《"+sheetName+"》第"+(rowIndex+1)+"行:\""+excelHead.getExcelName() + "\"不能为空！");
        }
    }
    /**
     * 类型转换
     *
     * @param classzz
     * @param value
     * @return
     */
    private static Object convertType(Class classzz, String value) {
        if (Integer.class == classzz || int.class == classzz) {
            return Integer.valueOf(value);
        }
        if (Short.class == classzz || short.class == classzz) {
            return Short.valueOf(value);
        }
        if (Byte.class == classzz || byte.class == classzz) {
            return Byte.valueOf(value);
        }
        if (Character.class == classzz || char.class == classzz) {
            return value.charAt(0);
        }
        if (Long.class == classzz || long.class == classzz) {
            return Long.valueOf(value);
        }
        if (Float.class == classzz || float.class == classzz) {
            return Float.valueOf(value);
        }
        if (Double.class == classzz || double.class == classzz) {
            return Double.valueOf(value);
        }
        if (Boolean.class == classzz || boolean.class == classzz) {
            return Boolean.valueOf(value.toLowerCase());
        }
        if (BigDecimal.class == classzz) {
            return new BigDecimal(value);
        }
       /* if (Date.class == classzz) {
            SimpleDateFormat formatter = new SimpleDateFormat(FULL_DATA_FORMAT);
            ParsePosition pos = new ParsePosition(0);
            Date date = formatter.parse(value, pos);
            return date;
        }*/
        return value;
    }
    /**
     * 获取properties的set和get方法
     */
    static class MethodUtils {
        private static final String SET_PREFIX = "set";
        private static final String GET_PREFIX = "get";
        private static String capitalize(String name) {
            if (name == null || name.length() == 0) {
                return name;
            }
            return name.substring(0, 1).toUpperCase() + name.substring(1);
        }
        public static String setMethodName(String propertyName) {
            return SET_PREFIX + capitalize(propertyName);
        }
        public static String getMethodName(String propertyName) {
            return GET_PREFIX + capitalize(propertyName);
        }
    }
}

