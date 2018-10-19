import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WebSocketComponent } from './web-socket/web-socket.component'; 
import {WebsocketService} from './shared/websocket.service';
// import { ProtoTestComponent } from './proto-test/proto-test.component';
import { ReqCommandPacket } from './module/packetId/impl/ReqCommandPacket';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WebSocketComponent,
   // ProtoTestComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [WebsocketService,ReqCommandPacket],
  bootstrap: [AppComponent]
})
export class AppModule { }
