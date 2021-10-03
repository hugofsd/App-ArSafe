import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { ToastController } from '@ionic/angular';

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

  carregando: boolean;

  constructor(
    public router: Router,
    public apiService: ApiService,
    private toastController: ToastController,
  ) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {

   this.getLocation();
  }




  sair(){
    this.router.navigate(['/home']);
  }

  async getLocation() {
    this.carregando = true;
    try {
      this.loading = true;
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.loading = false;
      this.gpsOn('GPS Ligado');
      console.log(this.latitude);
      console.log(this.latitude);
      this.carregando = false;
    } catch (error) {
      this.carregando = false;
      this.presentToast('Ops, verifique se seu GPS está ligado!');
     }


   this.api();
  }

  api() {
  this.apiService.buscarDados(this.latitude, this.longitude)
  .subscribe(
    data =>{
      this.dados = data;
      console.log(this.dados);
    }
  );
  }

  async presentToast(error: string) {
    const toast = await this.toastController.create({
      message: error,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
      translucent: true
    });
    toast.present();
  }

  async gpsOn(error: string) {
    const toast = await this.toastController.create({
      message: error,
      duration: 1000,
      position: 'bottom',
      color: 'success',
      translucent: true
    });
    toast.present();
  }

}


// function subscribe(arg0: (data: any) => void) {
//   throw new Error('Function not implemented.');
// }

