import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { AlertController, ToastController } from '@ionic/angular';

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

  statusAr: number;

  constructor(
    public router: Router,
    public apiService: ApiService,
    private toastController: ToastController,
    public alertController: AlertController
  ) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {

    this.getLocation();

    // this.statusAr = {
    //   //oi
    // }

  }

  async atualizacao() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ArSafe:',
      message: `
   
      <br><br>
      <b>TEMA: </b>DESENVOLVIMENTO DE UMA APLICAÇÃO DE SISTEMA DISTRIBUÍDO 
      PARA DISPOSITIVO MÓVEL. 
      <br><br>
      <b>DISCIPLINA VINCULADA: </b> Sistemas Distribuídos – SD.
      <br><br>
      <b>PROPOSTA: </b>Acompanhamento de índice de qualidade do ar (IQA)
       mapeada por geodocalização.
      <br><br>
      <b>EXTRA: </b>Relatório climatico da localização do usuário.
      <br><br>
      <b>ALUNO:</b> Hugo França da Silva Dias Pereira.
      <br><br>
      <b>RA:</b> N2393D-2.
      <br><br>
      <b>UNIDADE:</b> Campus Anchieta.
      <br><br>
      <b>CURSO:</b> CIENCIA DA COMPUTAÇÃO.
      <br><br>
      Mais detalhes no GitHub...
      ` ,
      buttons: ['Entendi']
    });
    await alert.present();
  }


  clima(){
    this.router.navigate(['/tabs/tab2']);
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
    this.statusAr =  this.dados.data.current.pollution.aqius;

    if(status < 50){
      this.statusTwo = 'Baixo risco para a saúde'; // bom
    } if(status === 51 && status < 100 ){
      this.statusTwo = 'Qualidade moderado'; //Moderado
    } if (status === 101 && status < 150){
      this.statusTwo = 'Nível insalubre para grupos sensíveis'; //	Insalubre para Grupos Sensíveis
    } if (status === 101 && status < 150){
      this.statusTwo = ' Nível Insalubre'; // Insalubre
    } if (status === 101 && status < 150){
      this.statusTwo = 'Alto risco para a saúde'; //Muito Insalubre
    } if (status === 101 && status < 150){
      this.statusTwo = 'Perigoso!'; //Perigoso
    }

    console.log(status);
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
