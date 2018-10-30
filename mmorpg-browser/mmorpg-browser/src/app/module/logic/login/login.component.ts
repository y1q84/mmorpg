import { Component, OnInit, Input } from '@angular/core';
import { Subscriber } from 'rxjs';
import { WebsocketService } from 'src/app/shared/websocket.service';
import { ReqLoginPacket, ReqCreateRolePacket, RoleType } from 'src/app/proto/bundle';
import { PacketId } from '../../packetId/PacketId';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginState = true;
  loginState: boolean;
  @Input()
  connectState: boolean;
  // 显示服务端发过来的信息
  reciveMessage: any;
  respCreateRoleMessage: string;

  uname: string;
  pass: string;
  playerName: string;
  // sex: string;
  sex = '男 女'.split('');
  selectedSex = '男';
  roleType: string[] = [];
  selectedRole = 'WARRIOR';

  onChange2(newValue) {
    console.log(newValue);
    this.selectedSex = newValue;
  }

  onChange(newValue) {
    console.log(newValue);
    this.selectedRole = newValue;
  }

  constructor(private wsService: WebsocketService) {
    for (const pro in RoleType) {
      if (pro !== null) {
        const type = RoleType[pro];
        const t = +type;
        // console.log(t === NaN);
        // console.log(t);
        // console.log(typeof t);
        if (isNaN(t)) {
          this.roleType.push(type);
        }
      }
    }
  }

  ngOnInit() {
  }

  /**
   * 发送登录消息
   */
  sendLoginMessage() {
    WebsocketService.observable = this.wsService.creatObservableSocket('ws://localhost:8085/ws');
        // 等价于下面subscribe括号里面的代码
        // const myObserver = {
        //   next:data =>{
        //     // console.log(`接收到数据推送：${data}`);
        //     if (this.connectState === true) return;
        //     if (data === '连接成功'){
        //       this.connectState = true;
        //       console.log(data);
        //     }
        //   },
        //   error:err => console.log(err),
        //   complete:() => console.log('流已经结束')
        // }
        WebsocketService.observable.subscribe(
          // data接收的是服务端发送给过来的消息
          data => {
           switch (data.packetId) {
             case PacketId.LOGIN_REQ:
                 this.wsService.sendMess(ReqLoginPacket, {userName: this.uname, password : this.pass });
                 break;
             case PacketId.LOGIN_RESP:
                  this.respMessage(data);
                  break;
             case PacketId.CREATE_ROLE_RESP:
                  this.respCreateRole(data);
                  break;
             default:
                  console.log('该请求不存在...');

           }

            // this.reciveMessage = data.respObj.result;
            // console.log('LoginComponent------>服务端推送过来的消息内容为:' + data.respObj.result);
            // if (this.loginState === true) {return; }
            // if (data === '登陆成功') {
            //   this.loginState = true;
            //   console.log('第一次：' + data);
            // }
          },
          err => console.log(err),
          () => console.log('流已经结束')
         );
         this.wsService.sendMess(ReqLoginPacket, {account: this.uname, password : this.pass });
  //  setInterval(this.wsService.sendMess, 500, ReqLoginPacket, {userName: this.uname, password : this.pass }) ;
  }

  createRole() {
    // const type = RoleType['MASTER'];
    // console.log(`${RoleType['MASTER']}`);
    if (RoleType[this.selectedRole] !== undefined) {
      console.log(`进来吗输错的话：？${RoleType[this.selectedRole]}`);
      this.wsService.sendMess(ReqCreateRolePacket, {playerName: this.playerName, roleType: RoleType[this.selectedRole], sex: this.sex});
    }
  }

  connect() {
  }

  respMessage(data: any) {
    this.reciveMessage = data.respObj.result;
    if (data.respObj.result === '登录成功') {
        this.loginState = true;
        console.log(' 登录成功 ');
    }
  }

  respCreateRole(data: any) {
    this.respCreateRoleMessage = data.respObj.result;
    console.log('角色创建：' + this.respCreateRoleMessage);
  }
}
