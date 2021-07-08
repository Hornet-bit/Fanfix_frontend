import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fanfic} from "../model/fanfix.model";
import {Chapter} from "../model/chapter.model";

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor(private http: HttpClient) {
  }

  getAllChaptersByFanfic(fanfic: Fanfic): Observable<Array<Chapter>> {
    return this.http.post<Array<Chapter>>('http://localhost:8080/read', JSON.stringify(fanfic));

  }
}
