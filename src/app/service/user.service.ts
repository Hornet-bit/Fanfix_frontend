import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

// import {Endpoint} from "../constant/endpoints.constant"
import {User} from "../model/user.model";
import {EndpointsConstant} from "../constant/endpoints.constant";
import {UserInfo} from "../model/user.info.model";
import {UserPreferencesModel} from "../model/user.preferences.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers!: [];
  private config: any;
  private header!: string;



  constructor(private http: HttpClient) {
  }


  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/cool-cars');
  }

  login(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(`${EndpointsConstant.login}`, user,  { observe: 'response' });
  }

  register(user: User): Observable<User> {
    return this.http.post <User>(`${EndpointsConstant.registration}`, user);
  }

  getInfoAboutUser(user: User): Observable<UserInfo> {
    return this.http.post <UserInfo>(`${EndpointsConstant.infoAboutUser}`, user);
  }

  updateUser(user:User):Observable<any>{
    return this.http.post<any>(`${EndpointsConstant.updateUser}`, user);
  }

  setPreferences(user:UserPreferencesModel):Observable<any>{
    return this.http.post<any>(`${EndpointsConstant.setPreferences}`, user);
  }
}
