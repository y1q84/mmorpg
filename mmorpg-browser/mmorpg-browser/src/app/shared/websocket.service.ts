import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { load } from "protobufjs";
import { PacketId } from '../module/packetId/PacketId';
import { BytePacket } from '../module/pack/BytePacket';
import { WebSocketComponent } from '../web-socket/web-socket.component';


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
      (observer) => {
        WebsocketService.ws.onopen = (event) => {
          observer.next("连接成功");//一旦连接成功则返回这个字符串
        };
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
    let packetId=PacketId.getPacketClass2PacketId(packetClass);
    console.log("packetId为："+packetId);
    let buffer=packetClass.encode(message).finish();
    console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);
     //将数据封装
     let bytePacket=BytePacket.valueOf(packetId,buffer);
     //将数据转换成Arraybuffer传输
     let data=bytePacket.encode();
     console.log(`${Array.prototype.map.call(new Uint8Array(data),x => x.toString(10)).join(',')}`);
     WebsocketService.ws.send(data); 
  }

  //用一个函数来存放websocket的生命周期
  websocketLife(subscriber:Subscriber<any>){
    WebsocketService.ws.onopen=(event)=>{

    };
    WebsocketService.ws.onmessage=(event)=>{
      //接收服务端发送过来的消息
      let message=event.data;
      let packetLength= (event.data as ArrayBuffer).byteLength;
    //  let dataView data=new dataView(e)

    }
    WebsocketService.ws.onerror = (event) => subscriber.error(event);
    WebsocketService.ws.onclose = (event) => {
      subscriber.complete();
    };

  //接收服务端发送的消息
  // reciveLoginMessage(event: MessageEvent){  
  //   WebsocketService.ws.onmessage=(event)=>{

  //   }
  // }
}
