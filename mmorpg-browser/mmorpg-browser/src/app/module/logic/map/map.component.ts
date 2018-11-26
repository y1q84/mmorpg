import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/shared/websocket.service';
import { PacketId } from '../../packetId/PacketId';
import { ReqEnterScenePacket } from 'src/app/proto/bundle';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  inputContent: string;
  receviceMessage: string;
  playerId: number;
  sceneId: number;
  mapId: number;
  scene = '场景1 场景2 场景3 场景4'.split(' ');
  selectedScene = '场景1';


  constructor(private wsService: WebsocketService) { }

  ngOnInit() {
  }

  onChange(newValue) {
    console.log(newValue);
    this.selectedScene = newValue;
  }

  sendEnterSceneMessage() {
        WebsocketService.observable.subscribe(
          // data接收的是服务端发送给过来的消息
          data => {
            console.log('服务端发送消息回来：' + data.packetId);
           switch (data.packetId) {
             case PacketId.ENTER_WORLD_REQ:
                 this.wsService.sendMess(ReqEnterScenePacket, {playerId: this.playerId , sceneId : this.sceneId, mapId: this.mapId });
                 break;
             case PacketId.ENTER_WORLD_RESP:
                  this.respMessage(data);
                  break;
             case PacketId.BROADCAST_ENTER_WORLD_RESP:
                  console.log('广播玩家进入场景。。');
                  this.broadcastEnterworld(data);
                  break;
             default:
                  console.log(data.packetId + '对应请求为。。');
                  console.log('该请求' + data.packetId + '不存在...');
           }

          },
          err => console.log(err),
          () => console.log('流已经结束')
         );
         this.wsService.sendMess(ReqEnterScenePacket, {playerId: 11111 , sceneId : 1001, mapId: 2 });
  }

  respMessage(data: any) {
    data.respObj.mapObject.forEach((val, index, array) => {
        // console.log('玩家id' + val.playerId + '\n玩家姓名：' + val.playerName);
        // if (index === 0) {
        //   this.receviceMessage = '玩家id:' + val.playerId + '\n玩家姓名：' + val.playerName + '\n玩家角色：' + val.role;
        // } else {
        //   this.receviceMessage += '\n玩家id:' + val.playerId + '\n玩家姓名：' + val.playerName + '\n玩家角色：' + val.role;
        // }
        console.log('枚举类型为：' + val.objectType);
        if (val.objectType === 'MONSTER') {
          if (index === 0) {
            this.receviceMessage = '怪物id:' + val.objectId + '\n怪物姓名：' + val.objectName;
          } else {
            this.receviceMessage += `\n怪物id:${val.objectId}\n怪物姓名:${val.objectName}`;
          }
        } else if (val.objectType === 'PLAYER') {
          if (index === 0) {
            this.receviceMessage = '玩家id:' + val.objectId + '\n玩家姓名：' + val.objectName;
          } else {
            this.receviceMessage += `\n玩家id:${val.objectId}\n玩家姓名:${val.objectName}`;
          }
        }

        console.log('玩家id' + val.objectId + '\n玩家姓名：' + val.objectName);
    });
  }

  broadcastEnterworld(data: any) {
    console.log('显示进入场景结果:' + data.respObj.result);
    this.receviceMessage += `\nid为${data.respObj.playerId}的玩家${data.respObj.result}`;
  }
}
