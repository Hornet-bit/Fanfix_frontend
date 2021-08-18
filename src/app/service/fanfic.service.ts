import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fanfic} from "../model/fanfix.model";

@Injectable({
  providedIn: 'root'
})
export class FanficService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<Fanfic>> {
    return this.http.get<Array<Fanfic>>('http://localhost:8080/fanfics');
  }

  createFanfic(fanfic : Fanfic):Observable<any>{
    return this.http.post<any>('http://localhost:8080/fanfics/new', fanfic)
  }
}
