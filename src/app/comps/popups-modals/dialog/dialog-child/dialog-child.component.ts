import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {Addr} from "../dialog.component";

@Component({
  selector: 'dk-dialog-child',
  templateUrl: './dialog-child.component.html',
  styleUrls: ['./dialog-child.component.scss']
})
export class DialogChildComponent {
  addr:Addr = <Addr>{};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    const i = 5;
  }
}
