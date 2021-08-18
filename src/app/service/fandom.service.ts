import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fanfic} from "../model/fanfix.model";
import {FandomModel} from "../model/fandom.model";

@Injectable({
  providedIn: 'root'
})
export class FandomService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<FandomModel>> {
    return this.http.get<Array<FandomModel>>('http://localhost:8080/fandoms');
  }

}
