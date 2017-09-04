import {Component, Inject, OnInit} from '@angular/core';
import {MD_SNACK_BAR_DATA, MdSnackBarRef} from '@angular/material';

@Component({
  selector: 'dk-snack-bar-child',
  templateUrl: './snack-bar-child.component.html',
  styleUrls: ['./snack-bar-child.component.scss']
})
export class SnackBarChildComponent {

  constructor(public mdSnackBarRef: MdSnackBarRef<SnackBarChildComponent>, @Inject(MD_SNACK_BAR_DATA) public data: any) { }


}
