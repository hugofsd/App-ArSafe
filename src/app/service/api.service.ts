import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  private API = environment.apiurl;

  constructor(public http: HttpClient) { }

  poluicaoService(lat: any, lon: any): Observable<any>{
    // eslint-disable-next-line
    return this.http.get(`${this.API}/v2/nearest_city?lat=` + lat + `&lon=` + lon + `&key=f8be2bb4-74ed-4e4c-b9df-7865a95e00d9`);
  }
}
