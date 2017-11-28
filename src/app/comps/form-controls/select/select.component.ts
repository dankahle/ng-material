import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dk-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza', disabled:true},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  floatPlaceholder = 'auto';


  constructor() { }

  ngOnInit() {
  }

}
