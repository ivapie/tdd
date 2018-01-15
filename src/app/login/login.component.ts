import {
  Component,
  OnInit
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AppState } from '../app.service';

@Component({
  selector: 'login',
  styleUrls: [`./login.component.css`],
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  public localState = {email: '', pass: '', isEmail: 'False', isPass: 'False'};

  constructor(
    public appState: AppState,
    public route: ActivatedRoute,
  ) {}

  public ngOnInit() {
    console.log('hello Login Component');
  }

  /* tslint:disable:max-line-length */
  public validateEmail(email) {
   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(email.toLowerCase());
  }

  public validatePassword(pass) {
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
    return re.test(pass);
  }

  public submitState(email: string, pass: string) {
    if ( this.validateEmail(email) ) {
      this.localState.isEmail =  'True';
    }else{
      this.localState.isEmail =  'False';
    }

    if ( this.validatePassword(pass) ) {
      this.localState.isPass =  'True';
    }else{
      this.localState.isPass =  'False';
    }

    if ( this.localState.isEmail === 'True' &&
      this.localState.isPass === 'True' ){
      this.appState.set('email', email);
      this.appState.set('pass', pass);
    }else{
      this.appState.set('email', '');
      this.appState.set('pass', '');
    }
  }
  /* tslint:enable:max-line-length */
}
