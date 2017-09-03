import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  min = 0;
  max = 12;
  step = 1 // what granularity they can pick, what it will snap to
  ticks = true;
  auto = false;
  _tickInterval:any = 6; // where the ticks show up
  thumbLabel = true;
  log = console.log;

  get tickInterval() {
    if (!this.ticks) {
      return undefined;
    }
    else {
      return this.auto? 'auto': this._tickInterval;
    }
  }

  set tickInterval(val:number) {
    this._tickInterval = val;
  }
}
