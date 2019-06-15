import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.scss']
})
export class SmartphoneComponent implements OnInit {

  
  public Smartphone = [
    {
      image : "./../../../assets/img/sp_blackberry.png", 
      title : 'Blackberry', 
      detail : 'BlackBerry is a line of smartphones, tablets, and services originally designed'
    },

    {
      image : "./../../../assets/img/sp_iphoneX.png", 
      title : 'iPhone X', 
      detail : 'iPhone X features a new all-screen design. Face ID, which makes your face your password'
    },

    {
      image : "./../../../assets/img/sp_note7.png", 
      title : 'Galaxy Note7', 
      detail : 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason'
    },

    {
      image : "./../../../assets/img/sp_vivo850.png", 
      title : 'Vivo', 
      detail : 'A young global smartphone brand focusing on introducing perfect sound quality'
    }

    
];

  constructor() { }

  ngOnInit() {
  }

}
