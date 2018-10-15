import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './../shared/websocket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit {

 // 将刚刚写的客户端的服务WebSocketService通过依赖注入，注入到组件中来
 constructor(private wsService:WebsocketService) { }

 ngOnInit() {
   // 订阅服务器发来消息产生的流
   this.wsService.creatObservableSocket("ws://localhost:8085/ws")
   .subscribe(
     data => console.log(data),
     err => console.log(err),
     () => console.log("流已经结束")
   )
 }
 // 向服务器主动发送消息
 sendMessagegToServer(){
   let buffer = new ArrayBuffer(6); // 初始化6个Byte的二进制数据缓冲区
   let dataView = new DataView(buffer);
   dataView.setInt16(0, 3); // 从第0个Byte位置开始，放置一个数字为3的Short类型数据(占2 Byte)
   dataView.setInt32(2, 2222);

   this.wsService.sendMess(buffer);
 }

}
