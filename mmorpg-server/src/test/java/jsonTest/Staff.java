package jsonTest;

import com.common.resource.ResourceDefaultFormat;
import com.common.resource.annotation.Id;
import com.common.resource.annotation.Resources;
import com.common.resource.data.ResourceDataObject;
import com.common.resource.read.ReadJson;

import java.util.List;

@Resources(suffix = "json",path = "resource")
public class Staff {
    @Id
    private int id;
    private String name;
    private int age;
    private String sex;
    private String address;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String toString(){
        return "Staff[name="+this.name+",age="+this.age+",sex="+this.sex+",address="+this.address+"]";
    }

    public static void main(String[] args) {
        ResourceDataObject rd=ResourceDataObject.valueOf(Staff.class,new ResourceDefaultFormat());
        ReadJson readJson=new ReadJson();
        List<Staff> list=readJson.read(rd);
        System.out.println("集合大小为："+list.size());
        for(Staff s: list){
            System.out.println(s.getId()+",\t"+s.getName()+",\t"+s.getAge()+",\t"+s.getSex()+",\t"+s.getAddress());
        }
    }

}
