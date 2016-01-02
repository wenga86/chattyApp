import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, NgFor} from 'angular2/common';
import {Http} from 'angular2/http';

// import {Title} from '../providers/title';

@Component({
  selector: 'home',
  directives: [NgFor],
  // providers: [ Title ],
  pipes: [ ],
  styles: [ require('./home.css') ],
  template: require('./home.html')
})
export class Home {
  cells: Number[];

  // TypeScript public modifiers
  constructor(public http: Http) {
  }

  ngOnInit() {
    this.cells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

}
