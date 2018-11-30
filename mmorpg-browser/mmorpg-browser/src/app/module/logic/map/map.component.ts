import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/shared/websocket.service';
import { PacketId } from '../../packetId/PacketId';
import { ReqEnterScenePacket, ReqChangeMapInstancePacket } from 'src/app/proto/bundle';

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
  scene = '1001 1002 1003 1004'.split(' ');
  selectedScene = '1001';


  constructor(private wsService: WebsocketService) { }

  ngOnInit() {
    console.log('从loginComponent跳转过来后执行了sendChangeSceenMessage方法，但此时的oldSceneId为0--->' + this.oldSceneId);
    this.sceneMessage();
  }

  onChange(newValue) {
    console.log(newValue);
    this.selectedScene = newValue;
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


  /**
   ******************处理响应******************
   */
  respMessage(data: any) {
    this.oldSceneId = data.respObj.sceneId;
    this.receviceMessage += `======================id为${data.respObj.sceneId}的场景信息======================\n`;
    data.respObj.mapObject.forEach((val, index, array) => {
        console.log('枚举类型为：' + val.objectType);
        if (val.objectType === 'MONSTER') {
            this.receviceMessage += `怪物id:${val.objectId}\n怪物姓名:${val.objectName}\n`;
        } else if (val.objectType === 'PLAYER') {

            this.receviceMessage += `玩家id:${val.objectId}\n玩家姓名:${val.objectName}\n`;
        }
        console.log('玩家id' + val.objectId + '\n玩家姓名：' + val.objectName);
    });
  }

  broadcastSceneInfo(data: any) {
    console.log('显示进入场景结果:' + data.respObj.result);
    this.receviceMessage += `id为${data.respObj.playerId}的玩家${data.respObj.result}\n`;
  }

  // 将玩家踢下线
  respRemovePlayer(data: any) {
    console.log('下线原因' + data.respObj.reason);
    this.receviceMessage += `${data.respObj.reason}\n`;
    // 3秒后跳转到登录页面
    setTimeout(() => window.location.href = 'http://localhost:4200/login', 3000);
  }
}
