/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';

import {XLarge} from './directives/x-large';
import {Home} from './home/home';
import {Dashboard} from './dashboard/dashboard';

/*
 * App Component
 * Top Level Component
 */
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'app', // <app></app>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [ ...FORM_PROVIDERS],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [ ...ROUTER_DIRECTIVES, XLarge ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  // Our list of styles in our component. We may add more to compose many styles together
  // styles: [`
  //   .title {
  //     font-family: Arial, Helvetica, sans-serif;
  //   }
  //   main {
  //     padding: 1em;
  //   }

  // `],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: `
    <header class="pos-f-t">
      <nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
        <a class="navbar-brand" href="#">Navbar</a>
        <ul class="nav navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" [routerLink]=" ['Home'] ">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]=" ['Dashboard'] ">Dashboard <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <form class="form-inline pull-xs-right">
          <input class="form-control" type="text" placeholder="Search">
          <button class="btn btn-info-outline" type="submit">Search</button>
        </form>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer class="pos-f-b">
      <div class="container-fluid">
        <nav class="navbar navbar-fixed-bottom navbar-light bg-faded">
          <ul class="nav navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" [routerLink]=" ['Home'] ">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]=" ['Dashboard'] ">Dashboard <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>

  `
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home' },
  { path: '/dashboard', component: Dashboard, name: 'Dashboard' }
])
export class App {
  constructor() {
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
