import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDatepicker} from "@angular/material";

@Component({
  selector: 'datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

/*
  @ViewChild(MatDatepicker) dp: MatDatepicker<Date>;

  ngAfterViewInit() {
    this.dp.open();
  }
*/

}
