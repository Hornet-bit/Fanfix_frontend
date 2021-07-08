import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { FanfixListComponent } from './component/fanfix-list/fanfix-list.component';
// import { CardFancyExample } from './component/card-fancy-example/card-fancy-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {Routes, RouterModule} from '@angular/router';

import { RegistrationDialogComponent } from './component/registration-dialog/registration-dialog.component';
import { LoginDialogComponent } from './component/login-dialog/login-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { TetstComponent } from './component/tetst/tetst.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatRippleModule} from "@angular/material/core";
import { ReadPageComponent } from './component/read-page/read-page.component';


const appRoutes: Routes =[
  // { path: '', component: HomeComponent},
  { path: 'read', component: ReadPageComponent},
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FanfixListComponent,
    ToolbarComponent,
    TetstComponent,
    RegistrationDialogComponent,
    LoginDialogComponent,
    ReadPageComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
