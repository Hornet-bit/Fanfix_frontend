import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.model';
import {TOKEN_NAME} from "../../service/auth.service";
import {CookieService} from 'ngx-cookie-service'
import {UserInfo} from "../../model/user.info.model";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginDialogComponent implements OnInit {

  loginForm!: FormGroup;


  username!: FormControl;
  password!: FormControl;
  hide = true;
  private user!: UserInfo;
  private cookieValue!: string;
  token!: string

  constructor(private userService: UserService, private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.initForm()

  }

  private initForm(): void {
    this.username = new FormControl(this.username, Validators.compose([Validators.required, Validators.minLength(3)]));
    this.password = new FormControl(this.password, Validators.compose([Validators.required, Validators.minLength(3)]));

    this.loginForm = new FormGroup({
      userName: this.username,
      password: this.password
    });
  }

  // submitForm(): void {
  // this.userService.login(this.buildCreateRequest()).subscribe((response) => {
  // this.user = this.travellers.concat(response.body);
  // response.headers.keys().map((key) => console.log(`${key}: ${response.headers.get(key)}`));
  // })
  // }

  submitForm(): void {
    this.userService.login(this.buildCreateRequest()).subscribe(
      resp => {
        const keys = resp.headers.keys();
        const headers = keys.map(key =>
          '${key}: ${resp.headers.get(key)}');

        this.token = resp.headers.get("Authorization") || "{}";
        localStorage.setItem(TOKEN_NAME, this.token)
        console.log(this.token)

        this.getInfoAboutUser()
        // this.cookieValue = this.cookieService.get("user")

        // console.log(this.cookieValue + "Куки")
      }
    );
  }

  private buildCreateRequest(): User {
    return {
      email: '',
      password: this.password.value,
      username: this.username.value,
    };
  }

  private getInfoAboutUser(): void {
    this.userService.getInfoAboutUser(this.buildCreateRequest())
      .subscribe(
      data => {
        this.user = data
        this.setDataToLocalStorage(this.user)
      })
  }

  private setDataToLocalStorage(user: UserInfo): void {
    localStorage.setItem("username", this.user.username)
    localStorage.setItem("avatar", this.user.avatar)
    localStorage.setItem("email", this.user.email)
    window.location.reload()

  }

}
