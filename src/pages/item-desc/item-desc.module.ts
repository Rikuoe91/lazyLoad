import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDescPage } from './item-desc';

@NgModule({
  declarations: [
    ItemDescPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemDescPage),
  ],
})
export class ItemDescPageModule {}
