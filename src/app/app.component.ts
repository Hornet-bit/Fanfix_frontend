import { Component } from '@angular/core';
import {Routes} from "@angular/router";
import {FanfixListComponent} from "./component/fanfix-list/fanfix-list.component";
import {TetstComponent} from "./component/tetst/tetst.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fanfics';

}
