import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  loginForm!: FormGroup;


  username!: FormControl ;
  password!: FormControl ;
  hide = true;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm(): void {
    this.username = new FormControl(this.username, Validators.compose([Validators.required, Validators.minLength(3) ]));
    this.password = new FormControl(this.password, Validators.compose([Validators.required, Validators.minLength(3) ]));

    this.loginForm = new FormGroup({
      userName: this.username,
      password: this.password
    });
  }

  submitForm(): void {
    this.userService.login(this.buildCreateRequest()).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  private buildCreateRequest(): User {
    return {
      email:'',
      password: this.password.value,
      username: this.username.value,
    };
  }

}
