import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dk-list',
  templateUrl: './dk-list.component.html',
  styleUrls: ['./dk-list.component.scss']
})
export class DkListComponent implements OnInit {

  messages = [
    {from: 'from1', subject: 'subject1', content: 'content1',
      avatar: 'https://en.gravatar.com/userimage/62456767/9ed2ba2545ac53e048f149f785a5caf2.jpeg',
    desc: 'dsfasdf sdaf asd fasd f asd f asdf asd f asd f asdf asd f sadf asd fasd fasd f'},
    {from: 'from2', subject: 'subject2', content: 'content2',
    avatar: 'https://en.gravatar.com/userimage/62456767/9ed2ba2545ac53e048f149f785a5caf2.jpeg',
      desc: 'dsfasdf sdaf asd fasd f asd f asdf asd f asd f asdf asd f sadf asd fasd fasd f'},
  ];

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  showInfo(link) {
    alert(link);
  }

}
