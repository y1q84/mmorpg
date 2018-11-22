package com.other.jprotobufTest;

import com.baidu.bjf.remoting.protobuf.Codec;
import com.baidu.bjf.remoting.protobuf.ProtobufProxy;
import com.baidu.bjf.remoting.protobuf.annotation.ProtobufClass;

@ProtobufClass
public class PersonJprotobufTest {

        public String name;
        public Integer id;
        public String email;
        public Double money;
        public byte[] bytes;
        public Float sal;

        public String getName() {
                return name;
        }

        public void setName(String name) {
                this.name = name;
        }

        public Integer getId() {
                return id;
        }

        public void setId(Integer id) {
                this.id = id;
        }

        public String getEmail() {
                return email;
        }

        public void setEmail(String email) {
                this.email = email;
        }

        public Double getMoney() {
                return money;
        }

        public void setMoney(Double money) {
                this.money = money;
        }

        public byte[] getBytes() {
                return bytes;
        }

        public void setBytes(byte[] bytes) {
                this.bytes = bytes;
        }

        public Float getSal() {
                return sal;
        }

        public void setSal(Float sal) {
                this.sal = sal;
        }

        public static void main(String[] args) {
                Codec<PersonJprotobufTest> peopleJprotoTestCodec= ProtobufProxy.create(PersonJprotobufTest.class);

                PersonJprotobufTest pjt=new PersonJprotobufTest();
                pjt.setId(1001);
                pjt.setName("Jack");
                pjt.setEmail("1234567");

                try{


                        byte[] personEncode=peopleJprotoTestCodec.encode(pjt);

                        PersonJprotobufTest pjtDecode=peopleJprotoTestCodec.decode(personEncode);
                        System.out.println("名字："+pjtDecode.getName());

                }catch (Exception e){
                        e.printStackTrace();
                }

        }

}
