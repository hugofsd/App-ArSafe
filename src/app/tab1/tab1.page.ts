import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('myslider') slide: IonSlides;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  sliderOpts = {
    autoplay: true,
    speed: 100
  };

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





}
