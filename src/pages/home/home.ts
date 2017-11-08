import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {InfoPage} from "../info/info";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


    goToInfoPage(){
      this.navCtrl.push("InfoPage");
    }



}
