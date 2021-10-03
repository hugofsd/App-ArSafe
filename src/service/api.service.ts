import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // eslint-disable-next-line @typescript-eslint/naming-convention
 // private API = environment.apiurl;

  constructor(public http: HttpClient) { }

  buscarDados(lat: any, lon: any): any{
    // eslint-disable-next-line
    return this.http.get(`http://api.airvisual.com/v2/nearest_city?lat=` + lat + `&lon=` + lon + `&key=f8be2bb4-74ed-4e4c-b9df-7865a95e00d9`);
  }
}
