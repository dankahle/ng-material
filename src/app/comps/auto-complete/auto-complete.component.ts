import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";

class User {

  constructor(public name:string, public age:number) {
  }

}

@Component({
  selector: 'auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
  myControl = new FormControl();
  options = [
    new User('dank', 50),
    new User('carl', 60),
    new User('david', 55)
  ];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .startWith(null)
      .map(user => user && typeof user === 'object' ? user.name : user)
      .map(name => name ? this.filter(name) : this.options.slice());
  }

  filter(name: string): User[] {
    return this.options.filter(option => new RegExp(`^${name}`, 'gi').test(option.name));
  }

  displayFn(user: User): string {
    return user ? user.name : '';
  }
}
