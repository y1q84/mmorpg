import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { load } from "protobufjs";
import { PacketId } from '../module/packetId/PacketId';
import { RequestPacket } from '../module/pack/RequestPacket';


@Injectable(
  {"providedIn":"root"}
)
export class WebsocketService {

  // 客户端的服务
  static ws:WebSocket;
  static observable: Observable<any>;
  constructor() { }

  // 定义返回一个流，这个流包含了服务器返回的消息
  creatObservableSocket(url:string) :Observable<any> {
    if (WebsocketService.ws ===undefined){
      WebsocketService.ws = new WebSocket(url);//连接服务器
    }
    WebsocketService.ws.binaryType="arraybuffer";
    return new Observable(
      observer => {
        WebsocketService.ws.onopen = (event) => {
          observer.next("连接成功");
        }
        // 发送下一个元素
        WebsocketService.ws.onmessage = (event) => observer.next(event.data);
        // 抛出异常
        WebsocketService.ws.onerror = (event) => observer.error(event);
        // 流结束
        WebsocketService.ws.onclose = (event) => observer.complete();
      }
    );
  }

  // 向服务器发送一个消息
  sendMess(packetClass:any,message:any) {//发送过来的消息应该包含某个具体的请求

    //通过websocekt可向服务器发送消息
    //发送的消息来源应该是文本框输入
    //接着通过proto文件进行编码成字节流
    //通过RequestPacket将数据进行封装：包长+packetId+字节流数据 
    //最后通过websocket发送
    const packet = new packetClass();
    let classname=packetClass.name;
    console.log("classname:"+classname);
    let packetId=PacketId.getPacketClassName2PacketId(classname);
    console.log("packetId为："+packetId);

    load(`src/app/proto/${classname}.proto`, (err, root) => {//此处的proto文件应该名变量
      if (err)
        throw err;


      //对发送过来的数据进行解析，找到具体的请求
      //对具体请求对象进行赋值
      //通过编码将之变成字节数组
      //对数据进行封装
    
      let detailPacket = root.lookupType(`${classname}`);    
      //将数据进行编码
      let buffer = detailPacket.encode(message).finish();
      console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);
      //将数据封装
      let requestPacket=RequestPacket.valueOf(packetId,buffer);
      //将数据转换成Arraybuffer传输
      let data=requestPacket.encode();
      console.log(`${Array.prototype.map.call(new Uint8Array(data),x => x.toString(10)).join(',')}`);
      WebsocketService.ws.send(data);
    
      //let message = ReqCommandPacket.create({ moveId:123456 });
      //console.log(`message = ${JSON.stringify(message)}`);
      //let decoded = ReqCommandPacket.decode(buffer);
      //console.log(`decoded = ${JSON.stringify(decoded)}`);
    });

  }
}
