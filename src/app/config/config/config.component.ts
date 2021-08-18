import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  // showConfigResponse() {
  //   this.userService.login()
  //     resp is of type `HttpResponse<Config>`
      // .subscribe(resp => {
      //   display its headers
        // const keys = resp.headers.keys();
        // this.headers = keys.map(key =>
        //   `${key}: ${resp.headers.get(key)}`);
        //
        // access the body directly, which is typed as `Config`.
        // this.config = { ...resp.body! };
      // });
  // }
}
