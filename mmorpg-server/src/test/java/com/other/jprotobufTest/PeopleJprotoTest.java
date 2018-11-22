package com.other.jprotobufTest;

import com.baidu.bjf.remoting.protobuf.Codec;
import com.baidu.bjf.remoting.protobuf.FieldType;
import com.baidu.bjf.remoting.protobuf.ProtobufProxy;
import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;

public class PeopleJprotoTest {

    @Protobuf(fieldType = FieldType.INT64,order = 1,required = true)
    private long playerId;

    @Protobuf(fieldType = FieldType.STRING,order = 2,required = true)
    private String name;

    @Protobuf(fieldType = FieldType.STRING,order = 3,required = true)
    private String pass;

    @Protobuf(fieldType = FieldType.STRING,order = 4)
    private String email;

    public long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(long playerId) {
        this.playerId = playerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public static void main(String[] args) {
        //jprotobuf编解码
        Codec<PeopleJprotoTest> peopleJprotoTestCodec= ProtobufProxy.create(PeopleJprotoTest.class);

        PeopleJprotoTest pjt=new PeopleJprotoTest();
        pjt.setPlayerId(1001);
        pjt.setName("Tom");
        pjt.setPass("123456");
        pjt.setEmail("123456789");

        try{

            //序列化
            byte[] pjtEncode=peopleJprotoTestCodec.encode(pjt);
            System.out.println("序列化后的结果为："+pjtEncode[1]);

            //反序列化
            PeopleJprotoTest pjtDecode=peopleJprotoTestCodec.decode(pjtEncode);
            System.out.println("PeopleJprotoTest对象："+pjtDecode.getName());


        }catch (Exception e){
            e.printStackTrace();
        }
    }

}
