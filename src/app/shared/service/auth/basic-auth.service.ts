import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthBean } from '../../model/AuthBean.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {
    let basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders(
      { Authorization: basicAuthString }
    );
    return this.http.get<AuthBean>(`http://localhost:8002/auth`, { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticated user', username);
          return data;
        }
      )
    )

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticated user')
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticated user');
    sessionStorage.removeItem('authToken');
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticated user');
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('authToken');
    }

  }

}