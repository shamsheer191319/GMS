import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  } from '../realmoney/ringgameconfiguration/gametabletemplate/gametabletemplate.component';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // apiURL = 'http://192.168.100.136:9999';

  // apiURL = 'http://192.168.46.38:9011/gms/api/v1';

  apiURL = 'http://192.168.46.72:9011/gms/api/v1';

  // apiURL = 'http://192.168.46.49:9999';

  //  apiURL = 'http://localhost:9011/gms/api/v1';



  constructor(private httpClient: HttpClient) { }

  authenticate(username, password) {

    return this.httpClient.post(`${this.apiURL}/login/json`, {userName: username, password: password},  { observe: 'response' })
  }



  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
