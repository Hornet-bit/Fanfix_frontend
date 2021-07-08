import {Component, OnInit} from '@angular/core';

import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent implements OnInit {


  registerForm!: FormGroup;
  email!: FormControl;
  username!: FormControl;
  password!: FormControl;
  hide = true;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.email = new FormControl(this.email, Validators.compose([Validators.required, Validators.email ]));
    this.username = new FormControl(this.username, Validators.compose([Validators.required, Validators.minLength(4) ]));
    this.password = new FormControl(this.password, Validators.compose([Validators.required, Validators.minLength(8) ]));

    this.registerForm = new FormGroup({
      email: this.email,
      userName: this.username,
      password: this.password
    });
  }

  submitForm(): void {
    this.userService.register(this.buildRequest()).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  private buildRequest(): User {
    return {
      email: this.email.value,
      username: this.username.value,
      password: this.password.value
    }
  }
}
