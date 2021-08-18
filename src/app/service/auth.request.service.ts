// import {BaseRequestOptions} from '@angular/http'

import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {TOKEN_NAME} from "./auth.service";

const AUTH_HEADER_KEY = "Authorization"
const HEADER_PREFIX = "Bearer_"

export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(TOKEN_NAME)

    const modifiedReq = req.clone({
      headers: req.headers.set(AUTH_HEADER_KEY, HEADER_PREFIX + token),
    });
    return next.handle(modifiedReq);
  }


}

