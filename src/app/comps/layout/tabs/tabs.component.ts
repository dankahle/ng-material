import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dk-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  links = [
    {url: '/one', label: 'one'},
    {url: '/two', label: 'two'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
