import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/shared/websocket.service';
import { PacketId } from '../../packetId/PacketId';
import { ReqRegisterPacket, RespRegisterPacket } from 'src/app/proto/bundle';
import { Router } from '@angular/router';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerState: boolean;
  connectState: boolean;

  account: string;
  pass: string;
  reciveMessage: string;

  constructor(private wsService: WebsocketService, public router: Router) {
    this.connectState = this.wsService.getConnectState();
    this.wsService.syncConnectState$.subscribe({
      next: (value) => {
        this.connectState = value;
      }
    });
   }

  ngOnInit() {
  }

  sendRegisterMessage() {
    WebsocketService.observable.subscribe(
      data => {
        switch (data.packetId) {
          case PacketId.REGISTER_RESP:
              this.respRegister(data);
              break;
          default:
               console.log(`longinComponent该请求${data.packetId}不存在...`);
        }
      },
      err => console.log(err),
      () => console.log('流已经结束')
    );
    this.wsService.sendMess(ReqRegisterPacket, {account: this.account, password : this.pass });
  }


  // 响应注册请求
  respRegister(data) {
    this.reciveMessage = data.respObj.result;
    if (this.reciveMessage === '注册成功' ) {
        this.registerState = true;
        // 注册成功3秒后跳转到登录页面
        // setTimeout(() => this.router.navigateByUrl('login'), 3000);
        setTimeout(() => window.location.href = 'http://localhost:4200/login', 3000);
        //  setTimeout(() => this.router.navigate(['http://localhost:4200/login', this.connectState]), 3000);
        console.log('注册成功！');
    }
  }

}
