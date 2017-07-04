import {Component, OnInit, ViewChild} from '@angular/core';
import {MdDatepicker} from "@angular/material";

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
  @ViewChild(MdDatepicker) dp: MdDatepicker<Date>;

  ngAfterViewInit() {
    this.dp.open();
  }
*/

}
