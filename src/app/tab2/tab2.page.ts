import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  loading: boolean;
  latitude: number;
  longitude: number;

  dados: any;

  constructor(
    public router: Router,
    public apiService: ApiService,
  ) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {

   this.getLocation();
  }




  sair(){
    this.router.navigate(['/home']);
  }

  async getLocation() {
    this.loading = true;
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.loading = false;

    console.log(this.latitude);
    console.log(this.latitude);

    this.api();
  }

  api() {
  this.apiService.buscarDados(this.latitude, this.longitude)
  .subscribe(
    data =>{
      this.dados = data;
      console.log(data);
    }
  );
  }
}
// function subscribe(arg0: (data: any) => void) {
//   throw new Error('Function not implemented.');
// }

