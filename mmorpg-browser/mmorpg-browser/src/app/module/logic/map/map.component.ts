import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/shared/websocket.service';
import { PacketId } from '../../packetId/PacketId';
import { ReqEnterScenePacket, ReqChangeMapInstancePacket, ReqAttackMonsterPacket, ReqChatWithOtherPacket,
  ReqUseSkillPacket } from 'src/app/proto/bundle';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  inputContent: string;
  receviceMessage = '';
  playerId: number;
  oldSceneId: number;
  mapId: number;
  // scene = '1001 1002 1003 1004'.split(' ');
  scene: string[] = [];
  selectedScene = '1001';
  isChange: boolean;


  constructor(private wsService: WebsocketService) { }

  ngOnInit() {
    console.log('从loginComponent跳转过来后执行了sendChangeSceenMessage方法，但此时的oldSceneId为0--->' + this.oldSceneId);
    this.sceneMessage();
  }

  onChange(newValue) {
    console.log(newValue);
    this.selectedScene = newValue;
    this.isChange = true;
  }

  sceneMessage() {
        WebsocketService.observable.subscribe(
          // data接收的是服务端发送给过来的消息
          data => {
          console.log('mapComponent----------->服务端发送消息回来：' + data.packetId);
           switch (data.packetId) {
              case PacketId.ENTER_WORLD_REQ:
                  this.wsService.sendMess(ReqEnterScenePacket, {playerId: this.playerId , sceneId : this.oldSceneId, mapId: this.mapId });
                  break;
              case PacketId.ENTER_WORLD_RESP:
                    this.respMessage(data);
                    break;
              case PacketId.BROADCAST_SCENE_RESP:
                    console.log('广播玩家进入场景。。');
                    this.broadcastSceneInfo(data);
                    break;
              case PacketId.REMOVE_ROLE_RESP:
                    console.log('响应将玩家踢下线..');
                    this.respRemovePlayer(data);
                    break;
              case PacketId.CHANGE_SCENE_RESP:
                    this.respChangeScene(data);
                    break;
              case PacketId.SEND_CHAT_RESP:
                    this.respSendChat(data);
                    break;
              case PacketId.USE_SKILL_RESP:
                    this.respUseSkill(data);
                    break;
             default:
                  console.log(data.packetId + '对应请求为。。');
                  console.log('该请求' + data.packetId + '不存在...');
           }

          },
          err => console.log(err),
          () => console.log('流已经结束')
         );
  }

  /**
   ******************处理请求******************
   */
  sendChangeSceneMessage() {
    this.wsService.sendMess(ReqChangeMapInstancePacket, {oldMapId: this.oldSceneId , newMapId: this.selectedScene});
  }

  // 发送消息指令
  sendCommandMessage() {
    const command = this.inputContent.split(' ');
    console.log(command[1]);
    const packetClass = PacketId.getPacketId2PacketClass(Number(command[0]));
    // console.log('请求包为：' + packetClass + '\nReqAttackMonsteerpacket效果相同否？' + ReqAttackMonsterPacket);
    switch (Number(command[0])) {
      case PacketId.ATTACK_MONSTER_REQ:
        this.wsService.sendMess(ReqAttackMonsterPacket, {mapId: this.selectedScene, monsterId: command[1]});
        break;
      case PacketId.SEND_CHAT_REQ:
        this.wsService.sendMess(ReqChatWithOtherPacket, {content: command[1]});
        break;
      case PacketId.USE_SKILL_REQ:
        const content = command[1].split('|');
        console.log('mapId' + (this.isChange ? this.selectedScene : this.oldSceneId) + ',targetId' + content[0] + ',技能id' + content[1]);
        this.wsService.sendMess(ReqUseSkillPacket,
          {mapId: (this.isChange ? this.selectedScene : this.oldSceneId) , targetId: content[0] , skillId: content[1]});
        break;
      default:
        console.log(`该请求${Number(command[0])}不存在...`);
    }
    this.inputContent = '';
  }


  /**
   ******************处理响应******************
   */
  respMessage(data: any) {
    this.oldSceneId = data.respObj.sceneId;
    // 显示场景id
    data.respObj.sceneIds.forEach((val, index, array) => {
        if (this.scene.indexOf(val) === -1) {
          this.scene.push(val);
        }
    });
    this.receviceMessage += `======================id为${data.respObj.sceneId}的场景信息======================\n`;
    data.respObj.mapObject.forEach((val, index, array) => {
        console.log('枚举类型为：' + val.objectType);
        let status;
        if (val.status === 1) {
            status = '存活';
        } else if (val.status === 0) {
            status = '死亡';
        }
        if (val.objectType === 'MONSTER') {
            this.receviceMessage += `怪物id:${val.objectId}\n怪物姓名:${val.objectName}\n怪物血量:${val.hp}\n状态:${status}\n怪物等级:${val.level}\n`;
        } else  if (val.objectType === 'NPC') {
            this.receviceMessage += `Npc id:${val.objectId}\nNpc姓名:${val.objectName}\nNpc血量:${val.hp}\n状态:${status}\n`;
        } else if (val.objectType === 'PLAYER') {

            this.receviceMessage += `玩家id:${val.objectId}\n玩家姓名:${val.objectName}\n玩家血量:${val.hp}\n状态:${status}\n玩家等级:${val.level}\n`;
        }
        console.log('玩家id' + val.objectId + '\n玩家姓名：' + val.objectName);
    });
  }

  // 广播场景信息
  broadcastSceneInfo(data: any) {
    console.log('显示进入场景结果:' + data.respObj.result);
    console.log(`id为${data.respObj.palyerId}的玩家`);
    this.receviceMessage += `id为${data.respObj.playerId}的玩家${data.respObj.result}\n`;
  }

  // 将玩家踢下线
  respRemovePlayer(data: any) {
    console.log('下线原因' + data.respObj.reason);
    this.receviceMessage += `${data.respObj.reason}\n`;
    // 3秒后跳转到登录页面
    setTimeout(() => window.location.href = 'http://localhost:4200/login', 3000);
  }

  // 响应切换场景
  respChangeScene(data: any) {
    console.log(`切换结果:${data.respObj.result}`);
    this.receviceMessage += `${data.respObj.result}\n`;
  }

  // 响应聊天消息
  respSendChat(data: any) {
      console.log('响应聊天消息...');
      /**
       * if (data.respObj.roleType === 'npc'){
       *   this.receviceMessage += `发给npc的消息内容：${data.respObj.content}\n`;
       *    // 发送npc响应的消息
       *    // npc回应信息
       *   this.receviceMessage += `npc回应消息：大侠，我早已恭候多时了，宝剑配英雄，来，接🗡！`;
       * }
       */
      if ( data.respObj.creatureId !== -1) {
        this.receviceMessage += `id为${data.respObj.playerId}的玩家，发给npc的消息内容：${data.respObj.content}\n`;
        if (data.respObj.creatureId === 10101) {
          this.receviceMessage += `npc回应消息：大侠，我早已恭候多时了，宝剑配英雄，来！接剑！\n`;
        } else if (data.respObj.creatureId === 10102 ) {
          this.receviceMessage += `npc回应消息：大侠，终于等到你啦，快来帮我出这口恶气！\n`;
        }
      } else {
        this.receviceMessage += `id为${data.respObj.playerId}的玩家，发送的消息内容：${data.respObj.content}\n`;
      }
  }

  // 响应使用技能
  respUseSkill(data: any) {
    console.log('响应使用技能...');
    this.receviceMessage += `${data.respObj.result}\n`;
  }
}
