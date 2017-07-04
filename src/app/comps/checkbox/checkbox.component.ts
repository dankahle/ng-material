import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  log = console.log;
  checked:boolean;
  indeterminate = false;
  labelPosition = 'before';
  @ViewChild('checkbox') checkbox;
  disabled = false;

  ngOnInit() {
    console.log(this.checkbox);
    this.checkbox.focus();
    this.checkbox.change.subscribe(x => console.log(x));
  }

  toggle() {
    this.checkbox.toggle();
  }

}
