import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fanfic} from "../model/fanfix.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public fanfic!:Fanfic

  constructor(private http: HttpClient) {
  }

}
