import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  min = 0;
  max = 12;
  step = 1 // what granularity they can pick, what it will snap to
  tickInterval = 6; // where the ticks show up
  thumbLabel = true;
  log = console.log;

  constructor() { }

  ngOnInit() {
  }

}
