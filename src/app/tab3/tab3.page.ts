import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  loading: boolean;
  latitude: number;
  longitude: number;

  dados: any;

  carregando: boolean;

  statusTwo: string;

  constructor(
    public router: Router,
    public apiService: ApiService,
    private toastController: ToastController,
  ) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {

    this.getLocation();

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
      this.status();
    }
  );
  }

  status(){
    const status = this.dados.data.current.pollution.aqius;

    if(status < 50){
      this.statusTwo = 'success'; // bom
    } if(status === 51 && status < 100 ){
      this.statusTwo = 'secondary'; //Moderado
    } if (status === 101 && status < 150){
      this.statusTwo = 'tertiary'; //	Insalubre para Grupos Sensíveis
    } if (status === 101 && status < 150){
      this.statusTwo = 'warning'; // Insalubre
    } if (status === 101 && status < 150){
      this.statusTwo = 'danger'; //Muito Insalubre
    } if (status === 101 && status < 150){
      this.statusTwo = 'dark'; //Perigoso
    }
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
