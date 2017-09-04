import { Component, OnInit } from '@angular/core';
import {MdSnackBar, MdSnackBarConfig} from "@angular/material";
import {SnackBarChildComponent} from "./snack-bar-child/snack-bar-child.component";

@Component({
  selector: 'dk-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {
  constructor(private mdSnackBar: MdSnackBar) { }

  open(message, action) {
    const ref = this.mdSnackBar.open(message, action, <MdSnackBarConfig>{
      // duration: 3000,
      data: {name: 'dank'}
    });
    ref.onAction().subscribe(x => console.log('onAction', x));
    ref.afterDismissed().subscribe(x => console.log('afterDismissed', x));
  }

  openChild(message, action) {
    const ref = this.mdSnackBar.openFromComponent(SnackBarChildComponent, <MdSnackBarConfig>{
      // duration: 3000,
      data: {
        message: message,
        action: action
      }
    });
    ref.onAction().subscribe(x => console.log('onAction', x));
    ref.afterDismissed().subscribe(x => console.log('afterDismissed', x));
  }



}
