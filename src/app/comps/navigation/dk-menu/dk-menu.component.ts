import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenu, MatMenuTrigger} from "@angular/material";

@Component({
  selector: 'dk-menu',
  templateUrl: './dk-menu.component.html',
  styleUrls: ['./dk-menu.component.scss']
})
export class DkMenuComponent implements OnInit {
  log = console.log;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  xPosition = 'before';
  yPosition = 'above';
  overlap = true;
  @ViewChild('menu2') menu2:MatMenu;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.menu2.focusFirstItem();
  }

  triggerMenu() {
    // still need the MatMenuTriggerFor directive attached to an element, so not sure what you buy here then
    this.trigger.openMenu();
  }
}
