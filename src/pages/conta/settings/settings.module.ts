import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySettingsPage } from './my-settings';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    MySettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(MySettingsPage),
    ComponentsModule,
  ],
  exports: [
    MySettingsPage
  ]
})
export class MySettingsPageModule {}
