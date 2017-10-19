import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTextareaAutosize} from "@angular/material";

@Component({
  selector: 'dk-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  food = 'apricot';
  desc = 'one \ntwo\n\three\nfour\n';
  @ViewChild('resize') ta:MatTextareaAutosize ;
  @ViewChild('input') input;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.ta.resizeToFitContent();// doesn't work with initial text resizing
  }

}
