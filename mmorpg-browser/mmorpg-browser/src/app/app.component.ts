import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './shared/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mmorpg-browser';
  connectState : boolean;
  

  constructor(private wsService: WebsocketService){
  }

  ngOnInit(){
    // 订阅服务器发来消息产生的流 
    WebsocketService.observable = this.wsService.creatObservableSocket("ws://localhost:8085/ws");
    // console.log(WebsocketService.observable.subscribe);
    WebsocketService.observable.subscribe(
      data => {
        // console.log(`接收到数据推送：${data}`);
        if (this.connectState === true) return;
        if (data === "连接成功"){
          this.connectState = true;
          console.log(data);
        }
      },
      err => console.log(err),
      () => console.log("流已经结束")
   );
  }
}
