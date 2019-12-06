import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  } from '../app/realmoney/ringgameconfiguration/gametabletemplate/gametabletemplate.component';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Observe: 'response' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiURL = 'http://192.168.100.168:9999';

  // apiURL = 'http://192.168.46.49:9999';



  // end point url

   baseUrl = 'http://192.168.100.168:9999';



  constructor(private httpClient: HttpClient) { }

//   getDatas() {

//     return this.httpClient.get(`${this.baseUrl}/`);
// }

  authenticate(username, password) {


    const fd = new FormData();
    fd.append('username', username);
    fd.append('password', password);


    // return this.httpClient.post(`${this.apiURL}/login`, fd, {});

     this.httpClient.post(`${this.apiURL}/login`, {userName: username, password: password });


    // .subscribe(data => {

    //   console.log('POST Request is successful ', data);
    //   return data;

    // }, err => {
    //     console.log('Error', err);
    //   });

  }
  getMethod() {
    return this.httpClient.get(`${this.baseUrl}/template/metadata`).subscribe((res) => {
      console.log(res);

  });
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
