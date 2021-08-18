import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TetstComponent} from "./component/tetst/tetst.component";
// import {CardFancyExample} from "./component/card-fancy-example/card-fancy-example.component";

const appRoutes: Routes =[
  {
    path: '',
    redirectTo: '/fanfic',
    pathMatch: 'full'
  },
  {
    path: 'fanfic',
    component: TetstComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
