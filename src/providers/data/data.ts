import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class DataProvider {


    items:any =[
        {item:"Sword art Online",
            info:{
                price:"Price: $29.99",
                desc:"Description: This is the blue Ray collection of Sword art Online",
                tag:"TAGS:  action,comedy,romance,sci-fi"
            }
        } ,
        {item:"Bleach",
            info:{
                price:"Price: $29.99",
                desc:"Description: This is the blue Ray collection of Sword art Online",
                tag:"TAGS:  action,comedy,romance,sci-fi"
            }

        } ,
        {item:"Flames of Recca",
            info:{
                price:"Price: $29.99",
                desc:"Description: This is the blue Ray collection of Sword art Online",
                tag:"TAGS:  action,comedy,romance,sci-fi"
            }} ,
        {item:"Fairy Tail",
            info:{
                price:"Price: $29.99",
                desc:"Description: This is the blue Ray collection of Sword art Online",
                tag:"TAGS:  action,comedy,romance,sci-fi"
            }} ,
        {item:"One Peice",
            info:{
                price:"Price: $29.99",
                desc:"Description: This is the blue Ray collection of Sword art Online",
                tag:"TAGS:  action,comedy,romance,sci-fi"
            }} ,
        {item:"Gundam Seed",
            info:{
                price:"Price: $29.99",
                desc:"Description: This is the blue Ray collection of Sword art Online",
                tag:"TAGS:  action,comedy,romance,sci-fi"
            }} ,
        {item:"Absolute Duo",
            info:{
                price:"Price: $29.99",
                desc:"Description: This is the blue Ray collection of Sword art Online",
                tag:"TAGS:  action,comedy,romance,sci-fi"
            }} ,
        {item:"Kaze No Stigma",
            info:{
                price:"Price: $29.99",
                desc:"Description: This is the blue Ray collection of Sword art Online",
                tag:"TAGS:  action,comedy,romance,sci-fi"
            }} ,
        {item:"Onegai Teacher",
            info:{
                price:"Price: $29.99",
                desc:"Description: This is the blue Ray collection of Sword art Online",
                tag:"TAGS:  action,comedy,romance,sci-fi"
            }} ,
        {item:"Kokoro Connect",
            info:{
                price:"Price: $29.99",
                desc:"Description: This is the blue Ray collection of Sword art Online",
                tag:"TAGS:  action,comedy,romance,sci-fi"
            }} ,
        {item:"Naruto Shippuden",
            info:{
                price:"Price: $29.99",
                desc:"Description: This is the blue Ray collection of Sword art Online",
                tag:"TAGS:  action,comedy,romance,sci-fi"
            }}
    ];

  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
