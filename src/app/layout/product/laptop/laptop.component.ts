import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {

  
  public Laptop = [
      {
        image : "./../../../assets/img/lt_macbook.png", 
        title : 'Macbook', 
        detail : 'The MacBook is a brand of notebook computers manufactured by Apple Inc'
      },

      {
        image : "./../../../assets/img/lt_hp.png", 
        title : 'HP OMEN', 
        detail : 'A young global smartphone brand focusing on introducing perfect sound quality'
      },

      {
        image : "./../../../assets/img/lt_lenovo.png", 
        title : 'LENOVO THINKPAD', 
        detail : 'The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012'
      },

      {
        image : "./../../../assets/img/lt_rog.png", 
        title : 'ASUS ROG', 
        detail : 'the Asus ROG Strix Flare is the latest addition to Asus lineup of ROG branded devices'
      }

      
  ];

  constructor() { }

  ngOnInit() {
    
  }


}
