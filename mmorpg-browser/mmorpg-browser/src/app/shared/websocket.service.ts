import { Injectable } from '@angular/core';
import { Observable, Subscriber, Unsubscribable  } from 'rxjs';
import { load } from 'protobufjs';
import { PacketId } from '../module/packetId/PacketId';
import { BytePacket } from '../module/pack/BytePacket';
import { WebSocketComponent } from '../web-socket/web-socket.component';
import { Location } from '@angular/common';


@Injectable(
  {'providedIn': 'root'}
)
export class WebsocketService {

  // 客户端的服务
  static ws: WebSocket;
  static observable: Observable<any>;
  syncConnectState$: Observable<any>;
  subscriber: Subscriber<any>;
  private connectState: boolean;
  // 定义一个观察者列表
  subscribers: Array<Subscriber<any>> = [];

  getConnectState() {
    return this.connectState;
  }
  set $connectState(connectState: boolean) {
    this.subscriber.next(connectState);
  }

  constructor(private location: Location) {
    this.syncConnectState$ = new Observable((observer) => {
      this.subscriber = observer;
    });
   }

  // 连接服务器，并返回一个Observable，传进一个观察者
  creatObservableSocket(url: string): Observable<any> {
    if (WebsocketService.ws === undefined) {
      WebsocketService.ws = new WebSocket(url); // 连接服务器
    }
    WebsocketService.ws.binaryType = 'arraybuffer';
    return new Observable(
      (observer) => {// 传入一个观察者
        /**
         * 当每传入一个观察者的时候就往观察者列表里面添加
         */
        this.subscribers.push(observer);
        if (this.subscribers.length === 1) {
        /**
         * 当连接成功的时候会进入到这个方法
         */
        WebsocketService.ws.onopen = (event) => {
          // observer.next('连接成功');//一旦连接成功则返回这个字符串
          // 连接成功需要给每个观察者发送连接成功消息
          this.subscribers.forEach((value, index, subscribers) => {
            value.next('连接成功');
          });
        };

        /**
         * 接收消息
         */
        // WebsocketService.ws.onmessage = (event) => observer.next(event.data);
        WebsocketService.ws.onmessage = (event) => {
          // 此处接收到服务器发送过来的消息
          console.log(`${Array.prototype.map.call(new Uint8Array(event.data), x => x.toString(10)).join(',')}`);

          if ( event.data instanceof ArrayBuffer) {
            // 对数据进行解码
            // 格式：包长+packetId+字节流数据
            const packetLength = (event.data as ArrayBuffer).byteLength;
            console.log('WebsocketService----->服务端发送消息啦..');
            const dataView = new DataView((event.data));
            // 验证包长信息以确定包是否完整
            if ( packetLength !== dataView.getUint32(0)) {
              console.log(`接收到的包不完整`);
              return;
            }
            const packetId = dataView.getUint16(4);
            // 获取数据
            const data = new Uint8Array((event.data), 6);
            // 通过PacketId可以根据 packetid找到对应的响应类
            // 相当于RespLoginPacket.class
            const clazz = PacketId.getPacketId2PacketClass(packetId);
            // 判断packetId对应的类是否存在
            if (clazz === undefined) {
              console.log(`${packetId}对应的类不存在..`);
            }
            // 对数据进行解码
            // obj相当于RespLoginPacket
            const obj = clazz.decode(data);
            // 次循环有点问题
            this.subscribers.forEach((value, index, subscribers) => {
              // 将数据封装成
              const nextData = {
                packetId: packetId,
                clazz: clazz,
                respObj: obj
              };
              // 发送数据
              value.next(nextData);

            });

          }
        };
        // 抛出异常
        WebsocketService.ws.onerror = (event) => observer.error(event);
        // 流结束
        WebsocketService.ws.onclose = (event) => observer.complete();

        // 当取消订阅的时候需要移除相对应的内容
       // const  myUnsubscribable=new Unsubscribable();
      }
    }
     );
  }

  // 向服务器发送一个消息
  sendMess(packetClass: any, message: any) {// 发送过来的消息应该包含某个具体的请求

    // 通过websocekt可向服务器发送消息
    // 发送的消息来源应该是文本框输入
    // 接着通过proto文件进行编码成字节流
    // 通过RequestPacket将数据进行封装：包长+packetId+字节流数据
    // 最后通过websocket发送
    const packetId = PacketId.getPacketClass2PacketId(packetClass);
    console.log('发送消息的packetId为：' + packetId);
    const buffer = packetClass.encode(message).finish();
    console.log(`发送的数据内容为：buffer = ${Array.prototype.toString.call(buffer)}`);
     // 将数据封装
    const bytePacket = BytePacket.valueOf(packetId, buffer);
     // 将数据转换成Arraybuffer传输
     const data = bytePacket.encode();
     console.log(`${Array.prototype.map.call(new Uint8Array(data), x => x.toString(10)).join(',')}`);
     WebsocketService.ws.send(data);
  }

  goto(uri: string) {
    // ${this.location.host}/
    this.location.go(`${uri}`);
  }
}
