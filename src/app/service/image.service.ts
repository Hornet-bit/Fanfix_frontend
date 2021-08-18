import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user.model";
import {UploadModel} from "../model/upload.model";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {
  }

  // getAll(): Observable<Array<Fanfic>> {
  //   return this.http.get<Array<Fanfic>>('http://localhost:8080/fanfics');
  // }

  // upload():
  formData = new FormData();
  user!:User
  sendAvatar(file:File):Observable<UploadModel>{
    this.formData.append('image', file)
    return this.http.post<UploadModel>('http://localhost:8080/upload', this.formData)
  }

  // sendPicture(file:File):Observable<UploadModel>{
  //   this.formData.append('image', file)
  //   return this.http.post<UploadModel>('http://localhost:8080/upload', this.formData)
  // }
}
