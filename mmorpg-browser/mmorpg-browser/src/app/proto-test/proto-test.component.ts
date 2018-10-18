import { Component, OnInit } from '@angular/core';
import { load } from "protobufjs"; // respectively "./node_modules/protobufjs"

@Component({
  selector: 'app-proto-test',
  templateUrl: './proto-test.component.html',
  styleUrls: ['./proto-test.component.css']
})
export class ProtoTestComponent implements OnInit {

  constructor() {
    load("src/app/proto/ReqCommandPacket.proto", function(err, root) {
      if (err)
        throw err;
    
      // example code
      const ReqCommandPacket = root.lookupType("ReqCommandPacket");
    
      let message = ReqCommandPacket.create({ moveId:123456 });
      console.log(`message = ${JSON.stringify(message)}`);
    
      let buffer = ReqCommandPacket.encode(message).finish();
      console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);
    
      let decoded = ReqCommandPacket.decode(buffer);
      console.log(`decoded = ${JSON.stringify(decoded)}`);
    });
   }

  ngOnInit() {
    
  }
}
