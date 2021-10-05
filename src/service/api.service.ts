import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  buscarDados(lat: any, lon: any): any{
    // eslint-disable-next-line
    return this.http.get(`https://api.airvisual.com/v2/nearest_city?lat=` + lat + `&lon=` + lon + `&key=f8be2bb4-74ed-4e4c-b9df-7865a95e00d9`);
  }
}
