import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  favoriteSeason: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  change(obj) {
    console.log(obj);
  }

  constructor() { }

  ngOnInit() {
  }

}
