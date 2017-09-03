import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dk-fx-play',
  templateUrl: './fx-play.component.html',
  styleUrls: ['./fx-play.component.scss']
})
export class FxPlayComponent {
  direction = 'row';
  constructor() { }

  toggle() {
    this.direction = (this.direction === 'row') ? 'column' : 'row';
  }


}
