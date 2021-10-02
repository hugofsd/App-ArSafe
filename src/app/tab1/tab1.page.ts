import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('myslider') slide: IonSlides;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  sliderOpts = {
    autoplay: true,
    speed: 100
  };

}
