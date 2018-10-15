import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebSocketComponent } from './web-socket/web-socket.component';
import {WebsocketService} from './shared/websocket.service';

@NgModule({
  declarations: [
    AppComponent,
    WebSocketComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
