import {Component, Directive, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'play',
  template: ``,
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}


/*

@Directive({
  selector: '[dir1]'
})
export class Dir1Directive {
  // @Input('dir1') val:Dir1Directive;
  @Input('dir1') val:Comp1Component;
  constructor(private elem:ElementRef) {
  }
  ngAfterViewInit() {
    this.elem.nativeElement.innerText = this.val.stuff;

  }
}

@Component({
  selector: 'comp1',
  template: 'comp1<br>'
})
export class Comp1Component {
  stuff = 'dank3';
}

@Component({
  selector: 'play',
  template: `
              <div [dir1]="c"></div>
              <comp1 #c></comp1>
  `,
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
*/
