import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public sliders:any = [
    {
      source  : './../../../assets/img/slide_1.jpg',
      alt     : 'Los Angeles',
      isActive: true,
    },
    {
      source  : './../../../assets/img/slide_2.jpg',
      alt     : 'Chicago',
      isActive: false,
    },
    {
      source  : './../../../assets/img/slide_3.jpg',
      alt     : 'New York',
      isActive: false,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
