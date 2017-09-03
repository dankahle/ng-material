import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dk-sidenav',
  templateUrl: './dk-sidenav.component.html',
  styleUrls: ['./dk-sidenav.component.scss']
})
export class DkSidenavComponent implements OnInit {
  mode = 'over';
  align = 'start';

  constructor() { }

  ngOnInit() {
  }

}
