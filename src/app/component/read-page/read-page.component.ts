import {Component, Input, OnInit} from '@angular/core';
import {ChapterService} from "../../service/chapter.service";
import {Fanfic} from "../../model/fanfix.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Chapter} from "../../model/chapter.model";
import {DataService} from "../../service/data.service";
import {FanficBasikModel} from "../../model/fanfic.basik.model";

@Component({
  selector: 'app-read-page',
  templateUrl: './read-page.component.html',
  styleUrls: ['./read-page.component.css']
})
export class ReadPageComponent implements OnInit {
  fanfic!: Fanfic
  fanficBasik: FanficBasikModel = { id: 0, date:"", description:"", title:"" };
  chapters!: Array<Chapter>

  constructor(private chapterService: ChapterService, private route: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    // debugger
    // console.log(this.fanfic.id + "id фанфика")
    this.fanfic = this.dataService.fanfic
    this.fanficBasik.id = this.fanfic.id
    this.fanficBasik.date = this.fanfic.date
    this.fanficBasik.title = this.fanfic.title
    this.fanficBasik.description = this.fanfic.description
    console.log(this.fanfic.id + "id фанфика")
    console.log(JSON.stringify(this.fanficBasik))

    this.chapterService.getAllChaptersByFanfic(this.fanficBasik).subscribe(
      data=> {
        this.chapters = data
      })

  }

}
