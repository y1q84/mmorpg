import { Component, OnInit,NgModule } from '@angular/core';
import { WebsocketService } from './../shared/websocket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit {

  content:any="nihao";
  // numberArray: Array<number>;
  // 将字符串格式化为UTF8编码的字节
  writeUTF(str: string, isGetBytes: boolean) {
  // let a =new Uint8Array();
  let back:number[] = [];
  let byteSize = 0;
  for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if (0x00 <= code && code <= 0x7f) {
            byteSize += 1;
            back.push(code);
      } else if (0x80 <= code && code <= 0x7ff) {
            byteSize += 2;
            back.push((192 | (31 & (code >> 6))));
            back.push((128 | (63 & code)));
      } else if ((0x800 <= code && code <= 0xd7ff) 
              || (0xe000 <= code && code <= 0xffff)) {
            byteSize += 3;
            back.push((224 | (15 & (code >> 12))));
            back.push((128 | (63 & (code >> 6))));
            back.push((128 | (63 & code)));
      }
   }
   for (let i = 0; i < back.length; i++) {
        back[i] &= 0xff;
   }
   if (isGetBytes) {
        return back
   }
   if (byteSize <= 0xff) {
        return [0, byteSize].concat(back);
   } else {
        return [byteSize >> 8, byteSize & 0xff].concat(back);
    }
}


 // 将刚刚写的客户端的服务WebSocketService通过依赖注入，注入到组件中来
 constructor(private wsService:WebsocketService) { }

 ngOnInit() {
   // 订阅服务器发来消息产生的流  
   this.wsService.creatObservableSocket("ws://localhost:8085/ws")
   .subscribe(
     data => console.log(data),
     err => console.log(err),
     () => console.log("流已经结束")
   )
 }
 // 向服务器主动发送消息
 sendMessagegToServer(){

  console.log("content的值为："+this.content);
   let contentByteArray = this.writeUTF(this.content, true);
   let buffer = new ArrayBuffer(4+2+contentByteArray.length); // 初始化6个Byte的二进制数据缓冲区
   let dataView = new DataView(buffer);
   dataView.setUint32(0,buffer.byteLength);
   dataView.setUint16(4, 3); // 从第0个Byte位置开始，放置一个数字为3的Short类型数据(占2 Byte)
   contentByteArray.forEach((value, index ,contentByteArray)=>{
    console.log(value.toString());
    dataView.setUint8(6+index, value);
   });

   this.wsService.sendMess(buffer);
 }


}
