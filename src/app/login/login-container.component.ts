import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login, State } from '../store';

@Component({
  selector: 'noveo-login',
  template: `
    <noveo-login-component (submitted)="onSubmit($event)"></noveo-login-component>
  `,
})
export class LoginContainerComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  onSubmit({ username, password }: { username: string, password: string }) {
    this.store.dispatch(new Login({ username, password }));
  }
}
