import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RegistrationDialogComponent} from "../registration-dialog/registration-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogComponent} from "../login-dialog/login-dialog.component";
import {Router} from "@angular/router";
import {SettingsDialogComponent} from "../settings-dialog/settings-dialog.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {

  avatar!:string | null
  hide!:boolean

  constructor(
    private ref: ChangeDetectorRef,
    private dialog: MatDialog,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.avatar = localStorage.getItem("avatar")
    this.ref.markForCheck();
    this.checkUserAuth()
  }

  checkUserAuth():void{
    if (localStorage.getItem("username") == null || localStorage.getItem("username") === ""){
      this.hide = true;
    }
  }

  openRegistrationDialog(): void {
    this.dialog.open(RegistrationDialogComponent, {
      height: '400px',
      width: '400px',
    });
  }

  openLoginDialog(): void {
    this.dialog.open(LoginDialogComponent, {
      height: '400px',
      width: '400px',
    });
  }

  settings(): void{
    // this.router.navigate(["/settings"])/\
    this.dialog.open(SettingsDialogComponent,{
      height: '900px',
      width: '900px',
    })
  }

  logout(): void{
    // localStorage.clear()
    localStorage.removeItem("username")
    localStorage.removeItem("avatar")
    localStorage.removeItem("email")
    localStorage.removeItem("jwt_token")
    window.location.reload()
  }

  createFanfic():void{
    this.router.navigate(['/create-fanfic']);
    // create-fanfic
  }
}
