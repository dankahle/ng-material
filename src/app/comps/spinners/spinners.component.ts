import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spinners',
  templateUrl: './spinners.component.html',
  styleUrls: ['./spinners.component.scss']
})
export class SpinnersComponent implements OnInit {
  strokeWidth = 10;
  val = 0;

  ngOnInit() {
    const timer = setInterval(() => {
      this.val = this.val + 5;
      if (this.val === 100) {
        clearInterval(timer);
      }
    }, 500);
  }

}
