import { Component, OnInit, Input } from '@angular/core';
import { WebsocketService } from '../shared/websocket.service';
import { ReqLoginPacket } from '../proto/bundle';

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

  //显示服务端发过来的信息
  reciveMessage : any;

constructor(private wsService:WebsocketService) {
 }

  ngOnInit() {
  }

  sendLoginMessage(){
    WebsocketService.observable.subscribe(
      //data接收的是服务端发送给过来的字符串
      data => {
        console.log("服务端发送的消息："+data);
        this.reciveMessage=data;
        if (this.loginState === true) return;
        if (data === "登陆成功"){
          this.loginState = true;
          console.log("第一次："+data);
        }
      },
      err => console.log(err),
      () => console.log("流已经结束")
     );
    this.wsService.sendMess(ReqLoginPacket,{userName: this.uname, password : this.pass });
  }

  // reciveLoginMessage(event: MessageEvent){  
  //   this.wsService.
  // }

  connect(){
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
