import { Component, OnInit } from '@angular/core';
import {FandomService} from "../../service/fandom.service";
import {FandomModel} from "../../model/fandom.model";
import {FanficService} from "../../service/fanfic.service";
import {User} from "../../model/user.model";
import {Fanfic} from "../../model/fanfix.model";
import {ImageService} from "../../service/image.service";
import {UploadModel} from "../../model/upload.model";

@Component({
  selector: 'app-create-fanfic',
  templateUrl: './create-fanfic.component.html',
  styleUrls: ['./create-fanfic.component.css']
})
export class CreateFanficComponent implements OnInit {

  title!:string
  description!:string
  fandom!:string
  files: File[] = [];
  fanfic!:FandomModel
  fandoms:Array<FandomModel> = []
  curDate = new Date();
  private uploadImage!: UploadModel;
  constructor(
    private fandomService:FandomService,
    private fanficService:FanficService,
    private imageService:ImageService
  ) { }

  ngOnInit(): void {
    this.fandomService.getAll().subscribe(
      data => {
        this.fandoms = data
      }
    )
  }

  createFanfic():void{
    this.fanficService.createFanfic(this.buildFanfic()).subscribe()
  }

  private buildFanfic(): Fanfic {
    return {
      "id": 0,
      "date": "",
      "title": this.title,
      "author": localStorage.getItem("username")|| "",
      "fandom": this.fandom,
      "description": this.description,
      "authorAvatar": "",
      "picture": this.uploadImage.url
    }
  }


  onSelect({event}: { event: any }) {
    console.log(event);
    if(this.files && this.files.length >=1) {
      this.onRemove({event: this.files[0]});
    }
    this.files.push(...event.addedFiles);
  }

  onRemove({event}: { event: any }) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  uploadPicture():void{
    this.imageService.sendAvatar(this.files[0]).subscribe(
      data=> {
        this.uploadImage = data
      }
    )
  }
}
