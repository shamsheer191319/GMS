import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  } from "../app/realmoney/ringgameconfiguration/gametabletemplate/gametabletemplate.component";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiURL = 'http://192.168.100.168:9999';

  // end point url

  // baseUrl = 'http://localhost:3000/';



  constructor(private httpClient: HttpClient) { }

//   getDatas() {

//     return this.httpClient.get(`${this.baseUrl}/`);
// }

  authenticate(username, password) {

    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('username', username);
      console.log("in login");
      // here will be code to call http://192.168.100.168:9999/login

      const fd = new FormData();
		fd.append('username', username);
    fd.append('password', password);

       this.httpClient.post(`${this.apiURL}/login`, fd, {}).subscribe(data => {
        console.log('POST Request is successful ', data);
      }, err => {
        console.log('Error', err); });





    } else {
      return false;

    }

  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
