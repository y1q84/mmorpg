import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './module/logic/map/map.component';
import { LoginComponent } from './module/logic/login/login.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
