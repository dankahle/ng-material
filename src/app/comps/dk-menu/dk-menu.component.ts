import {Component, OnInit, ViewChild} from '@angular/core';
import {MdMenu, MdMenuTrigger} from "@angular/material";

@Component({
  selector: 'dk-menu',
  templateUrl: './dk-menu.component.html',
  styleUrls: ['./dk-menu.component.scss']
})
export class DkMenuComponent implements OnInit {
  log = console.log;
  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
  xPosition = 'before';
  yPosition = 'above';
  overlap = true;
  @ViewChild('menu2') menu2:MdMenu;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.menu2.focusFirstItem();
  }

  triggerMenu() {
    // still need the MdMenuTriggerFor directive attached to an element, so not sure what you buy here then
    this.trigger.openMenu();
  }
}
