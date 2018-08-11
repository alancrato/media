import { Component } from '@angular/core';
import { AlertController } from "ionic-angular";

@Component({
  selector: 'notifications',
  templateUrl: 'notifications.html'
})

export class NotificationsComponent {

  constructor(
      public alertCtrl: AlertController
  ) {}

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Receber Notificações?',
      message: 'Ative ou Desative as notificaçoes a qualquer instante, basta escolher a opção abaixo.',
      buttons: [
        {
          text: 'Ativar?',
          handler: () => {
            console.log('Set localStorage active status to notification!');
          }
        },
        {
          text: 'Desativar!',
          handler: () => {
            console.log('Set localStorage desactive status to notification!');
          }
        }
      ]
    });
    confirm.present();
  }

}
