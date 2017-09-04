import {Component, Injectable} from '@angular/core';


@Injectable()
class UsefulService {
}

@Injectable()
class NeedsService {
  constructor(public service: UsefulService) {}
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
links = [
  {url: '/one', label: 'one'},
  {url: '/two', label: 'two'},
]

}
