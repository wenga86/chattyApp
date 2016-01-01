import {
it,
inject,
injectAsync,
beforeEachProviders,
TestComponentBuilder
} from 'angular2/testing';

// Load the implementations that should be tested
import {Message, User, Thread} from "./models";

describe('Models', () => {

  it('should have a User model', inject([], () => {
    let user: User = new User("Nate", "");

    expect(user).toEqual(jasmine.any(Object));
    expect(user.name).toEqual("Nate");
    expect(user.avatarSrc).toEqual("");
  }));

  it('should have a Message model', inject([], () => {
    let message: Message = new Message({
      text: 'This is a test',
      thread: 1
    });

    expect(message).toEqual(jasmine.any(Object));
    expect(message.sentAt).toEqual(jasmine.any(Date));
    expect(message.text).toEqual("This is a test");
    expect(message.thread).toEqual(1);
  }));

  it('should have a Thread model', inject([], () => {
    let thread: Thread = new Thread(null, 'Chicken Pen');

    expect(thread).toEqual(jasmine.any(Object));
    expect(thread.name).toEqual("Chicken Pen");
  }));

});
