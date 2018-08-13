import { Component } from '@angular/core';
import { AlertController } from "ionic-angular";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'notifications',
  templateUrl: 'notifications.html'
})

export class NotificationsComponent {

  constructor(
      public alertCtrl: AlertController,
      private storage: Storage
  ) {}

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Receber Notificações?',
      message: 'Ative ou Desative as notificaçoes a qualquer instante, basta escolher a opção abaixo.',
      buttons: [
        {
          text: 'Ativar?',
          handler: () => {
            this.storage.set('notification','active');
            console.log('Set localStorage active status to notification!');
            //aplicar toast
          }
        },
        {
          text: 'Ler!',
          handler: () => {
            this.storage.get('notification').then((val) => {
              console.log('Your age is', val);
            });
          }
        },
        {
          text: 'Desativar!',
          handler: () => {
            this.storage.remove('notification');
            console.log('Remove to localStorage desactive status to notification!');
            //aplicar toast
          }
        }
      ]
    });
    confirm.present();
  }

}
