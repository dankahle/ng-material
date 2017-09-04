import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogConfig} from "@angular/material";
import {DialogChildComponent} from "./dialog-child/dialog-child.component";

export interface Addr {
  street?: string,
  city?: string
}

interface Info {
  name?: string,
  age?: number,
  addrs: Addr[]
}

@Component({
  selector: 'dk-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  obj:Info = <Info>{
    addrs: <Addr>[]
  };
  config: MdDialogConfig = {
    width: '400px',
    height: '400px',
    data: {}
  }

  constructor(private mdDialog: MdDialog) {
  }

  addAddr() {
    this.config.data.name = this.obj.name;
    this.mdDialog.open(DialogChildComponent, this.config)
      .afterClosed().subscribe(result => {
        if (result) {
          this.obj.addrs.push(result);
        }
    });
  }

}
