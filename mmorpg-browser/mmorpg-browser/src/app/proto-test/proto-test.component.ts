import { Component, OnInit } from '@angular/core';
import { load } from "protobufjs"; // respectively "./node_modules/protobufjs"

@Component({
  selector: 'app-proto-test',
  templateUrl: './proto-test.component.html',
  styleUrls: ['./proto-test.component.css']
})
export class ProtoTestComponent implements OnInit {

  constructor() {
    load("src/app/proto/AwesomeMessage.proto", function(err, root) {
      if (err)
        throw err;
    
      // example code
      const AwesomeMessage = root.lookupType("AwesomeMessage");
    
      let message = AwesomeMessage.create({ awesomeField: "hello" });
      console.log(`message = ${JSON.stringify(message)}`);
    
      let buffer = AwesomeMessage.encode(message).finish();
      console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);
    
      let decoded = AwesomeMessage.decode(buffer);
      console.log(`decoded = ${JSON.stringify(decoded)}`);
    });
   }

  ngOnInit() {
    
  }
}
