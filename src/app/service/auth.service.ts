import {HttpClient} from "@angular/common/http";

export const TOKEN_NAME: string = "jwt_token"

export class AuthService{

  private url:string = "http:localhost:8080/login"
  private headers = new Headers({"Content-Type":"application/json"})

  constructor(private http:HttpClient) {
  }

  getToken():string | null{
    return localStorage.getItem(TOKEN_NAME)
}
  setToken(token:string){
    localStorage.setItem(TOKEN_NAME, token)
  }
}
