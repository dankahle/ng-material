import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {

  chips = [
    {name: 'one', selected: false},
    {name: 'two', selected: false},
    {name: 'three', selected: true},
  ];

}
