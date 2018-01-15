import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppState } from '../app.service';

describe('Login', () => {

  /**
   * Provide our implementations or mocks to the dependency injector
   */
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      /**
       * Provide a better mock.
       */
      {
        provide: ActivatedRoute
      },
      {
        provide: AppState
      },
      LoginComponent
    ]
  }));

  let emailList = ['ivapie@gmail.com', 'ivapiegmai.com', 'ivapiecom'];
  let password = 'Kymani11@';

  /* tslint:disable:max-line-length */
  it('should log ngOnInit', inject([LoginComponent], (login: LoginComponent) => {
    login.ngOnInit();
  }));

  emailList.map( (email) => {
    it('should log validate Email ' + email , inject([LoginComponent], (login: LoginComponent) => {
      let result = login.validateEmail(email);
      expect(result).toBeTruthy();
    }));
  });
  // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
  it('should log validate password', inject([LoginComponent, AppState], (login: LoginComponent) => {
    let result = login.validatePassword(password);
    expect(result).toBeTruthy();
  }));

  /* tslint:enable:max-line-length */
});
