import { Component, OnInit, Input } from '@angular/core';
import { WebsocketService } from '../shared/websocket.service';
import { ReqLoginPacket } from '../module/packetId/impl/ReqLoginPacket';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginState :boolean;
  @Input()
  connectState : boolean;

  uname:string;
  pass:string;

constructor(private wsService:WebsocketService) {
 }


  ngOnInit() {
  }

  sendLoginMessage(){
    this.wsService.sendMess(ReqLoginPacket,{username: this.uname, password : this.pass });
  }

  connect(){
  // 订阅服务器发来消息产生的流
  // WebsocketService.observable.subscribe(
  //   data => {
  //     if (this.loginState === true) return;
  //     if (data === "登陆成功"){
  //       this.loginState = true;
  //       console.log(data);
  //     }
  //   },
  //   err => console.log(err),
  //   () => console.log("流已经结束")
  //  );
  WebsocketService.observable = this.wsService.creatObservableSocket("ws://localhost:8085/ws");
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
