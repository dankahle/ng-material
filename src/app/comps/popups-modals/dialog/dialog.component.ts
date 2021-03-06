import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
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
  config: MatDialogConfig = <MatDialogConfig>{
    width: '400px',
    height: '400px',
    data: {}
  }
  @ViewChild('addrTemplate') addrTemplate: TemplateRef<any>;

  constructor(private mdDialog: MatDialog) {
  }

  addAddr() {
    this.config.data.name = this.obj.name;
    this.mdDialog.open(DialogChildComponent, this.config)
      // template option doesn't work currently as mat doesn't return a MatDialogRef for templates
    // this.mdDialog.open(this.addrTemplate, this.config)
      .afterClosed().subscribe(result => {
        if (result) {
          this.obj.addrs.push(result);
        }
    });
  }

}
