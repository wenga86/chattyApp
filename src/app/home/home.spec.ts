import {
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

// Load the implementations that should be tested
import {Home} from './home';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Home,
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]})
  ]);

  it('should have a cells', inject([ Home ], (home) => {
    home.ngOnInit();
    expect(home.cells).toEqual(jasmine.arrayContaining([3, 1]));
  }));

  it('should have a http', inject([ Home ], (home) => {
    expect(!!home.http).toEqual(true);
  }));

  it('should log ngOnInit', inject([ Home ], (home) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).not.toHaveBeenCalled();
  }));

});
