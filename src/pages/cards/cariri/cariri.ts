import {Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-cariri',
  templateUrl: 'cariri.html',
})

export class CaririPage {
    @ViewChild(Slides) slides: Slides;

    url:string = 'http://198.24.156.115:9318/;';
    stream:any;
    plaY:boolean;

    cards = [
        {
            img: "assets/img/cards/rede.png"
        },
        {
            img: "assets/img/cards/aracati.png"
        },
        {
            img: "assets/img/cards/cariri.png"
        }
    ];

    constructor(
        public navCtrl: NavController
    ) {
      this.stream = new Audio(this.url);
      this.plaY = true;
    }

    ionViewDidEnter(){
      this.play();
        let currentIndex = this.slides.getActiveIndex();
         console.log('Current index is', currentIndex);
        this.slides.slideTo(2, 500);
    }

    ionViewDidLeave(){
      this.pause();
    }

    play(){
      let play = this.stream.play();
      this.plaY = false;
      if(play){
        console.log('Playing');
      }
    }

    pause(){
      this.stream.pause();
      this.plaY = true;
    }

}
