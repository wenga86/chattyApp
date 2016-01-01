import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';


@Component({
  selector: 'dashboard',
  directives: [...FORM_DIRECTIVES],
  // providers: [ Title ],
  pipes: [],
  // styles: [require('./home.css')],
  template: require('./dashboard.html')
})
export class Dashboard {

  // TypeScript public modifiers
  constructor(public http: Http) {
  }

  ngOnInit() {
  }

}
