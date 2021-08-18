import {Component, OnInit, Output} from '@angular/core';
import {FanficService} from "../../service/fanfic.service";
import {Fanfic} from "../../model/fanfix.model";
import {Routes, RouterModule, Router} from '@angular/router';
import {DataService} from "../../service/data.service";
import {ThemePalette} from "@angular/material/core";



type Rating = {
  value: number;
  max: number;
  color?: ThemePalette;
  disabled: boolean;
  dense: boolean;
  readonly: boolean;
};

@Component({
  selector: 'app-fanfix-list',
  templateUrl: './fanfix-list.component.html',
  styleUrls: ['./fanfix-list.component.css']
})
export class FanfixListComponent implements OnInit {
  @Output() fanfic!:Fanfic

  hide!:boolean
  fanfics: Array<Fanfic> | undefined;

  constructor(private fanficService: FanficService, private router: Router,
              private dataService:DataService) {
  }

  ngOnInit(): void {
    this.fanficService.getAll().subscribe(data => {
      this.fanfics = data
      this.checkUserAuth()
    })
  }

  rating: Rating =
    {
      dense: false, disabled: false, readonly: false,
      value: 2,
      max: 5,
      color: "accent"
    }


  checkUserAuth():void{
    if (localStorage.getItem("username") == null || localStorage.getItem("username") === ""){
      this.hide = true;
    }
  }

  readFanfic(fanfic: Fanfic): void {
    this.dataService.fanfic = fanfic
    this.router.navigate(['/read']);
  }
}
