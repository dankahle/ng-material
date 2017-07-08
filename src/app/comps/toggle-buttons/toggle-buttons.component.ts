import { Component, OnInit } from '@angular/core';
import {MdButtonToggleChange} from "@angular/material";

@Component({
  selector: 'toggle-buttons',
  templateUrl: './toggle-buttons.component.html',
  styleUrls: ['./toggle-buttons.component.scss']
})
export class ToggleButtonsComponent implements OnInit {

  buttons = [
    {name: 'left', value: false},
    {name: 'center', value: false},
    {name: 'right', value: true},
    {name: 'justify', value: false, disabled: true},
  ];
  constructor() { }

  ngOnInit() {
  }

  change(idx, e:MdButtonToggleChange) {
    this.buttons[idx].value = e.source.checked;
  }

}
