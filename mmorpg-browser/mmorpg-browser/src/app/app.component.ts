import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './shared/websocket.service';
import { PacketId } from './module/packetId/PacketId';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mmorpg-browser';
  connectState: boolean;

  constructor(private wsService: WebsocketService) {
        const packetId = new PacketId();
  }

  ngOnInit() {

    // 订阅服务器发来消息产生的流
        // 这里调用了websocket.service.ts中的连接服务器的方法
        // 一旦连接成功，websocket.service.ts会推来'连接成功'字符串
        WebsocketService.observable = this.wsService.creatObservableSocket('ws://localhost:8085/ws');
        // console.log(WebsocketService.observable.subscribe);
        WebsocketService.observable.subscribe(
          // 当初次连接服务器的是时候，其中data就是websocket.service.ts推送过来的内容：'连接成功'
          // 当服务器发送消息过来时，此data应该存放的是发送过来的数据
          data => {
            console.log('appcomponent------->接收到的消息：' + data);
            // console.log(`接收到数据推送：${data}`);
            if ( this.connectState === true ) {return; }
            // 如果发送过来的内容为'连接成功'，则修改连接状态为true,且输出一下数据进行验证
            if (data === '连接成功') {
              this.connectState = true;
              console.log(data);
            }
          },
          // data=>console.log(data),
          err => console.log(err),
          () => console.log('流已经结束')
       );

  }
}
