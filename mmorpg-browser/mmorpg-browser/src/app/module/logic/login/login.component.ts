import { Component, OnInit, Input } from '@angular/core';
import { Subscriber } from 'rxjs';
import { WebsocketService } from 'src/app/shared/websocket.service';
import { ReqLoginPacket, ReqCreateRolePacket, RoleType, ReqRoleLoginPacket, ReqEnterScenePacket } from 'src/app/proto/bundle';
import { PacketId } from '../../packetId/PacketId';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { validateConfig } from '@angular/router/src/config';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  route: ActivatedRoute;
  // loginState = true;
  loginState: boolean;
  connectState: boolean;
  // 显示服务端发过来的信息
  reciveMessage: any;
  respCreateRoleMessage: string;
  playerId: number;
  pid: number; // 玩家id(从已有角色|新创建的角色id取)
  uname: string;
  pass: string;
  playerName: string;
  // 用来存放已经创建的角色
  // 应该从账号登录成功的响应包里面获取值
  role: string[] = [];
  useRole: string;
  id2object = new Map <number, string>(); // 用于角色登录时获取玩家id
  // sex: string;
  sex = '男 女'.split('');
  sSex = '男';
  roleType: string[] = [];
  selectedRole = 'WARRIOR';
  // 请求进入场景状态
  enterSceneStatus: string;
  transfor: string;
  // 能否进入场景
  isDisabled = true;

  onChange(newValue) {
    console.log('新职业：' + newValue);
    this.useRole = newValue;
  }

  onChange1(newValue) {
    console.log(newValue);
    this.sSex = newValue;
  }

  onChange2(newValue) {
    console.log(newValue);
    this.selectedRole = newValue;
  }

  constructor(private wsService: WebsocketService,
    private location: Location
    ) {
      this.connectState = this.wsService.getConnectState();
      this.wsService.syncConnectState$.subscribe({
        next: (value) => {
          this.connectState = value;
        }
      });

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
    // 通过路由传参过来
    // this.connectState = this.route.snapshot.params['connectState'];
  }

  connect() {
  }

  /**
   * 发送登录消息
   */
  sendLoginMessage() {
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
            case PacketId.ROLE_LOGIN_RESP:
                  this.respRoleLogin(data);
                  break;
             default:
                  console.log(`longinComponent该请求${data.packetId}不存在...`);

           }
          },
          err => console.log(err),
          () => console.log('流已经结束')
         );
         this.wsService.sendMess(ReqLoginPacket, {account: this.uname, password : this.pass });
  //  setInterval(this.wsService.sendMess, 500, ReqLoginPacket, {userName: this.uname, password : this.pass }) ;
  }
  /**
   ***************************请求方法*****************************
   */
  // 创建角色
  createRole() {
    // const type = RoleType['MASTER'];
    // console.log(`${RoleType['MASTER']}`);
    if (RoleType[this.selectedRole] !== undefined) {
     // console.log(`进来吗输错的话：？${RoleType[this.selectedRole]}`);
      this.wsService.sendMess(ReqCreateRolePacket, {playerName: this.playerName, roleType: RoleType[this.selectedRole], sex: this.sSex});
    }
  }
  // 角色登录
  roleLogin() {
    // 如果this.playerId为空，则是从已有角色中选择登录?
    // 不一定，如果我创建了一个角色，然后
    // 登录成功之后会获取该playerId
    // if (this.playerId === undefined) {
    //   this.id2object.forEach((value, key) => {
    //       if (this.useRole === value) {
    //           this.pid = key;
    //       }
    //   });
    // } else {
    //   console.log(`palyerId为${this.playerId}`);
    //   console.log(`请求角色登录获得的玩家id为：${this.playerId}`);
    //   this.pid = this.playerId;
    // }
    this.id2object.forEach((value, key) => {
      if (this.useRole === value) {
          this.pid = key;
      }
  });
     this.wsService.sendMess(ReqRoleLoginPacket, {playerId: this.pid});
  }

  // 请求进入场景
  reqEnterscene() {
    if (this.pid !== undefined) {
      this.wsService.sendMess(ReqEnterScenePacket, {playerId: this.pid });
      this.enterSceneStatus = ' ';
    } else {
      this.enterSceneStatus = '请选择需要进入场景的角色';
    }
  }

  /**
   *
   ************************** 响应方法 **************************
   */
  // 响应登录
  respMessage(data: any) {
    this.reciveMessage = data.respObj.result;
    if (data.respObj.result === '登录成功') {
        this.loginState = true;
        console.log(' 登录成功 ');
    }
    let flag = 1;
    data.respObj.playerEntityInfos.forEach((val, index, array) => {
      const roleInfor = '称号:' + val.name + '--性别:' + val.sex + '--职业:' + val.roleType;
      if (flag === 1) {
        this.useRole = roleInfor;
        flag++;
      }
      // 存放角色id与角色的映射
      this.id2object.set(val.id , roleInfor);
      console.log('是否有重复元素存在：' + this.role.indexOf(roleInfor) );
      if (this.role.indexOf(roleInfor) === -1) {
        this.role.push(roleInfor);
      }
      console.log('名字' + val.name + '职业' + val.roleType);
    });
  }
  // 响应创建角色
  respCreateRole(data: any) {
    this.respCreateRoleMessage = data.respObj.result;
    // 如果是角色创建成功，则新增角色选择下拉框
    // 这时应该返回一个playerEntityInfos列表
    if (data.respObj.result === '角色创建成功..') {
      const roleInfor =
      '称号:' + data.respObj.roleCreateInfo.name +
      '--性别:' + data.respObj.roleCreateInfo.sex +
      '--职业:' + data.respObj.roleCreateInfo.roleType;
      if (this.role.indexOf(roleInfor) === -1) {
        this.role.push(roleInfor);
      }
      this.playerId = data.respObj.playerId;
      this.id2object.set(data.respObj.roleCreateInfo.id, roleInfor);
    }
    console.log('角色创建：' + this.respCreateRoleMessage);
  }
  respRoleLogin(data) {
    this.respCreateRoleMessage = data.respObj.result;
    if (this.respCreateRoleMessage === '角色登录成功') {
      console.log('角色登录成功');
      this.isDisabled = false;
    } else {
      console.log('登录失败');
      this.isDisabled = true;
    }
  }

  // enterscene() {
  //     this.wsService.goto(`map`);
  // }
}
