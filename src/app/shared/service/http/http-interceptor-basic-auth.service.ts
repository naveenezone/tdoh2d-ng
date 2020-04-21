import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthService } from '../auth/basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService {

  constructor(private authService: BasicAuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let basicAuthString = this.authService.getAuthenticatedToken();
    let username = this.authService.getAuthenticatedUser();


    if (basicAuthString && username) {
      request = request.clone(
        {
          setHeaders: {
            Authorization: basicAuthString
          }
        }
      )
    }
    return next.handle(request);

  }


}
