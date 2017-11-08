import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {InfoPage} from "../info/info";
import {DataProvider} from "../../providers/data/data";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items:any;

  constructor(public navCtrl: NavController, public dataService:DataProvider) {

  }

   ionViewDidLoad(){
       this.items= this.dataService.items;
       console.log(this.items);
   }

    goToInfoPage(){
      this.navCtrl.push("InfoPage");
    }

    goToItemDesc(item){
        this.navCtrl.push("ItemDescPage", item)
    }

}
