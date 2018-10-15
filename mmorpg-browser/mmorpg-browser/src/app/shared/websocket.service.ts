import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class WebsocketService {

  // 客户端的服务
  ws:WebSocket;
  constructor() { }

  // 定义返回一个流，这个流包含了服务器返回的消息
  creatObservableSocket(url:string) :Observable<any> {
    this.ws = new WebSocket(url);//连接服务器
    this.ws.binaryType="arraybuffer";
    return new Observable(
      observer => {
        // 发送下一个元素
        this.ws.onmessage = (event) => observer.next(event.data);
        // 抛出异常
        this.ws.onerror = (event) => observer.error(event);
        // 流结束
        this.ws.onclose = (event) => observer.complete();
      }
    )
  }

  // 向服务器发送一个消息
  sendMess(message:ArrayBuffer) {
    this.ws.send(message);
  }
}
