import { Component, OnInit, Input } from '@angular/core';
import { WebsocketService } from '../shared/websocket.service';
import { ReqLoginPacket } from '../proto/bundle';
import { Subscriber } from 'rxjs';

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

  /**
   * 发送登录消息
   */
  sendLoginMessage(){
    WebsocketService.observable = this.wsService.creatObservableSocket("ws://localhost:8085/ws");
        //等价于下面subscribe括号里面的代码
        // const myObserver = {
        //   next:data =>{
        //     // console.log(`接收到数据推送：${data}`);
        //     if (this.connectState === true) return;
        //     if (data === "连接成功"){
        //       this.connectState = true;
        //       console.log(data);
        //     }
        //   },
        //   error:err => console.log(err),
        //   complete:() => console.log("流已经结束")
        // }
        WebsocketService.observable.subscribe(
          //data接收的是服务端发送给过来的消息
          data => {
            this.reciveMessage=data.respMessage.result;
            console.log("LoginComponent------>服务端推送过来的消息内容为:"+data.respMessage.result);
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


  connect(){
        
  }
}
