import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({

  providedIn: 'root'

})
export class TemplatemasterdataService {

   // apiURL = 'http://192.168.100.136:9999/gms/api/v1';

  // apiURL = 'http://192.168.46.38:9011/gms/api/v1';

   apiURL = 'http://192.168.46.72:9011/gms/api/v1';

  // apiURL = 'http://admin:admin@192.168.100.168:9999/gms/api/v1';

  //  apiURL = 'http://localhost:9011/gms/api/v1';

  constructor(private httpClient: HttpClient) { }

  getMetadata() {
    return this.httpClient.get(`${this.apiURL}/templates/metadata/json`, { observe: 'response' });


  }
  postMetadata(data) {
    return this.httpClient.post(`${this.apiURL}/templates/json`, data, { observe: 'response' });

  }

  getListdata() {
    return this.httpClient.get(`${this.apiURL}/templates/json`, { observe: 'response' });

  }
  getListById(id) {

    return this.httpClient.get(`${this.apiURL}/templates/{id}/json`, { observe: 'response' });
  }


}
