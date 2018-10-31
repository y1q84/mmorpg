import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WebSocketComponent } from './web-socket/web-socket.component';
import {WebsocketService} from './shared/websocket.service';
import { LoginComponent } from './module/logic/login/login.component';
import { MapComponent } from './module/logic/map/map.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    WebSocketComponent,
    LoginComponent,
    MapComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
