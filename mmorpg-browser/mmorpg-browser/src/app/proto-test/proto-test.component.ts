import { Component, OnInit } from '@angular/core';
import { load } from "protobufjs"; // respectively "./node_modules/protobufjs"

@Component({
  selector: 'app-proto-test',
  templateUrl: './proto-test.component.html',
  styleUrls: ['./proto-test.component.css']
})
export class ProtoTestComponent implements OnInit {

  constructor() {
    //找到proto文件并对之进行编解码
    //编码成RequestPacket可以发包
    //解码成对象可以拆包
    
   }

  ngOnInit() {
    
  }
}
