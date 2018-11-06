package com.common.resource.converter;

import com.alibaba.fastjson.JSON;
import org.springframework.beans.PropertyEditorRegistrySupport;

import java.beans.PropertyEditor;
import java.lang.reflect.Type;
import java.util.List;

/**
 * 自定义属性转换器
 */
public class Converter  extends PropertyEditorRegistrySupport {

    public Converter(){
        /**
         * 注册默认的属性编辑器
         * 激活使用默认属性编辑器的标记位
         * 只有在调用getDefaultEditor才真正会注册defaultEditors中
         */
        registerDefaultEditors();
        //TODO 可以根据需要注册其他属性编辑器
    }

    public <T> T convert(Class type, Type genericType, String value){
//        PropertyEditor p=this.getDefaultEditor(String.class);
//        System.out.println("为空否?p:"+p);//PropertyEditor有StringEditor实现类，但是拿到的p为null,why?
        /**
         * PropertyEditorRegistrySupport中，
         * public PropertyEditor getDefaultEditor(Class<?> requiredType)
         * 方法可以获取到属性编辑器
         * 其中，PropertyEditor是一个抽象的属性编辑器接口，其实现类有
         * IntegerEditor,DoubleEditor,ByteEditor等等
         * 通过重写setAsText(String var)方法将输入的字段串转成对应的 "数据类型值"
         * 通过propertyEditor.getValue()方法获取数据值
         */

        //无需转换
        if(String.class.equals(type)){
            return (T)value;
        }

        //获取默认属性编辑器
        PropertyEditor propertyEditor=this.getDefaultEditor(type);
        if(propertyEditor!=null){

            //如果字段类型为：list<对象>，则需要获取其field.genericType()
            if(type.equals(List.class)){
                return (T) JSON.parseObject(value,genericType);
            }
            propertyEditor.setAsText(value);
        }else{
            //查找自定义的PropertyEditor
            propertyEditor=this.findCustomEditor(type,null);
            //当默认属性编辑器和自定义属性编辑器都不是时，判断是否为enum或json类型
            if(propertyEditor==null){
                if(type.isEnum()){
                    return (T)Enum.valueOf((Class<Enum>)type,value);
                }else{
                    //将字符串转换成对象
                    return (T) JSON.parseObject(value,type);
                }
            }
        }
        return (T)propertyEditor.getValue();
    }

}
