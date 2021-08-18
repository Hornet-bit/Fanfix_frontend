import { Component, OnInit } from '@angular/core';
import {ImageService} from "../../service/image.service";
import {UploadModel} from "../../model/upload.model";
import {User} from "../../model/user.model";
import {UserInfo} from "../../model/user.info.model";
import {UserService} from "../../service/user.service";
import {FandomService} from "../../service/fandom.service";
import {FandomModel} from "../../model/fandom.model";
import {UserPreferencesModel} from "../../model/user.preferences.model";


@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent implements OnInit {

  constructor(
    private service:ImageService,
    private userService:UserService,
    private fandomService:FandomService
  ) { }

  // user:UserInfo = new UserInfo
  user:UserInfo = { email:"", username:"", password:"", avatar:"" };
  userPreferenceModel:UserPreferencesModel = {username:"", fandoms: new Array<string>()}
  files: File[] = [];
  str!:string
  uploadImage!:UploadModel
  fandoms:Array<FandomModel> = []
  userFandoms:Array<string> = []
  set:Set<string> = new Set<string>()
  public selectedVal!: string;

  ngOnInit(): void {
    this.fandomService.getAll().subscribe(
      data => {
        this.fandoms = data
      }
    )
    this.selectedVal ='enable';
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

  uploadAvatar(){
    console.log("button")
    this.service.sendAvatar(this.files[0]).subscribe(
      data=> {
        this.uploadImage = data
        this.setAvatar(this.uploadImage)
      }
    )

  }
  setAvatar(upload:UploadModel){
    localStorage.setItem("avatar", upload.url)
    this.user.avatar = upload.url
    this.user.username = localStorage.getItem("username") || ""
    this.user.email = localStorage.getItem("email") || ""

    console.log(upload.url)
    this.userService.updateUser(this.user).subscribe()
    window.location.reload()
  }

  savePreferences(){
    this.userPreferenceModel.username = localStorage.getItem("username") || ""
    // this.userPreferenceModel.fandoms = this.set
    this.set.forEach((value, value2, set1) =>{
    this.userFandoms.push(value)
    })
    this.userPreferenceModel.fandoms = this.userFandoms
    this.userService.setPreferences(this.userPreferenceModel).subscribe()
  }

  addPreference(fandom:string){
    this.set.add(fandom)
    // this.userPreferences.push(fandom)
    // console.log(JSON.stringify(this.userPreferences))
    this.set.forEach((value, value2, set1) =>{
      console.log(value)
    })
  }

  removePreference(fandom:string){
   this.set.delete(fandom)
    this.set.forEach((value, value2, set1) =>{
      console.log(value)
    })
  }



}
