import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemDescPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-desc',
  templateUrl: 'item-desc.html',
})
export class ItemDescPage {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.item = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDescPage');
  }

}
