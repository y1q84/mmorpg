package com.common.resource.data;

import com.common.resource.ResourceDefaultFormat;
import com.common.resource.annotation.Id;
import com.common.resource.annotation.Resources;
import com.common.resource.type.ResourceType;
import org.apache.commons.lang.StringUtils;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;

import java.io.File;
import java.lang.reflect.Field;

/**
 * 根据资源类拼凑资源路径及获取对应路径下的资源
 */
public class ResourceDataObject {

    //"classpath*":用于加载类路径（包括jar包）中的所有匹配的资源
    private static final String CLASSPATH="classpath*:";
    private String path;
    private String fileName;
    private String suffix;
    private String totalPath;
    private ResourceType resourceType;
    private Class resourceClass;//资源类
    private Resource[] resources;//资源数组
    private String keyName;//主键名
    private Class keyReturnType;//主键返回类型

    /**
     * Spring提供ResourcePatternResolver接口来加载多个Resource，
     * 该接口继承了ResourceLoader并添加了方法：
     * "Resource[] getResources(String locationPattern)"
     * 用来加载多个Resource
     */
    private static final ResourcePatternResolver rpr=new PathMatchingResourcePatternResolver();

    public ResourceDataObject(){

    }

    public ResourceDataObject(String path,String suffix,ResourceType resourceType,String fileName,String totalPath,Class resourceClass){
        this.path=path;
        this.suffix=suffix;
        this.resourceType=resourceType;
        this.fileName=fileName;
        this.totalPath=totalPath;
        this.resourceClass=resourceClass;

        try{
            //读取类路径下的资源文件
            resources=this.rpr.getResources(CLASSPATH+totalPath);
        }catch (Exception e){
            e.printStackTrace();
        }

        //判断资源类是否有主键
        Field[] fields=resourceClass.getDeclaredFields();
        for(Field f:fields){
            Id idAnnotation = f.getAnnotation(Id.class);
            if(idAnnotation!=null){
                keyName=f.getName();
                keyReturnType=f.getType();
                break;
            }
        }
        if(keyName==null||keyReturnType==null){
            throw new RuntimeException(String.format("资源类%s没有带@Id注解的主键",resourceClass.getSimpleName()));
        }

    }

    public static ResourceDataObject valueOf(Class resourceClass, ResourceDefaultFormat defaultFormat){
        Resources annotation=(Resources) resourceClass.getAnnotation(Resources.class);
        if(annotation==null){
            return null;
        }
        //获取文件路径
        String path=annotation.path();
        if(StringUtils.isEmpty(path)){
            path=defaultFormat.getPath();
        }
        //获取文件后缀
        String suffix=annotation.suffix();
        if(StringUtils.isEmpty(suffix)){
            suffix=defaultFormat.getSuffix();
        }
        //获取资源类型
        ResourceType resourceType=annotation.type();
        if(ResourceType.NONE.equals(resourceType)){
            resourceType=defaultFormat.getType();
        }
        //获取文件名
        String fileName = annotation.value();
        if(StringUtils.isEmpty(fileName)){
            //用资源类名当作文件名
            fileName=resourceClass.getSimpleName();
        }

        /**
         * 拼凑路径：
         * classpath*:(path)/fileName.suffix
         */
        StringBuilder builder=new StringBuilder();
        if(!StringUtils.isEmpty(path)){
            //添加/分割符
            builder.append(path).append(File.separator);
        }
        //在这里要考虑一个问题就是文件名时候有.后缀
        if(fileName.lastIndexOf(".")!=-1){
            builder.append(fileName).append(".").append(suffix);
        }else{
            builder.append(fileName);
        }
        String totalPath=builder.toString();

        return new ResourceDataObject(path,suffix,resourceType,fileName,totalPath,resourceClass);
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getSuffix() {
        return suffix;
    }

    public void setSuffix(String suffix) {
        this.suffix = suffix;
    }

    public String getTotalPath() {
        return totalPath;
    }

    public void setTotalPath(String totalPath) {
        this.totalPath = totalPath;
    }

    public ResourceType getResourceType() {
        return resourceType;
    }

    public void setResourceType(ResourceType resourceType) {
        this.resourceType = resourceType;
    }

    public Class getResourceClass() {
        return resourceClass;
    }

    public void setResourceClass(Class resourceClass) {
        this.resourceClass = resourceClass;
    }

    public Resource[] getResources() {
        return resources;
    }

    public void setResources(Resource[] resources) {
        this.resources = resources;
    }

    public String getKeyName() {
        return keyName;
    }

    public void setKeyName(String keyName) {
        this.keyName = keyName;
    }

    public Class getKeyReturnType() {
        return keyReturnType;
    }

    public void setKeyReturnType(Class keyReturnType) {
        this.keyReturnType = keyReturnType;
    }
}
