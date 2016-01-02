import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';

// COMPONENTS
import {ChatNavBar} from "../components/ChatNavBar";
import {ChatThreads} from "../components/ChatThreads";
import {ChatWindow} from "../components/ChatWindow";

@Component({
  selector: 'dashboard',
  directives: [ChatNavBar,
               ChatThreads,
               ChatWindow],
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
