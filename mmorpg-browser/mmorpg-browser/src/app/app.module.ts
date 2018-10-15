import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WebSocketComponent } from './web-socket/web-socket.component';
import {WebsocketService} from './shared/websocket.service';

@NgModule({
  declarations: [
    AppComponent,
    WebSocketComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
