import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dk-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class DkProgressComponent implements OnInit {

  val = 0;

  ngOnInit() {
    const timer = setInterval(() => {
      this.val++;
      if (this.val > 100) {
        clearInterval(timer);
      }
    }, 200);
  }

}
