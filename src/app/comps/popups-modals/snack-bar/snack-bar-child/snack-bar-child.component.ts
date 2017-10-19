import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material';

@Component({
  selector: 'dk-snack-bar-child',
  templateUrl: './snack-bar-child.component.html',
  styleUrls: ['./snack-bar-child.component.scss']
})
export class SnackBarChildComponent {

  constructor(public mdSnackBarRef: MatSnackBarRef<SnackBarChildComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: any) { }


}
