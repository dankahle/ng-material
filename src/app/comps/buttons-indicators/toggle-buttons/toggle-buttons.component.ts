import { Component, OnInit } from '@angular/core';
import {MatButtonToggleChange} from "@angular/material";

@Component({
  selector: 'toggle-buttons',
  templateUrl: './toggle-buttons.component.html',
  styleUrls: ['./toggle-buttons.component.scss']
})
export class ToggleButtonsComponent {

  buttons = [
    {name: 'left', value: false},
    {name: 'center', value: false},
    {name: 'right', value: true},
    {name: 'justify', value: false, disabled: true},
  ];

}
