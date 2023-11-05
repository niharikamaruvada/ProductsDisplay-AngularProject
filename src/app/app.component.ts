import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectEmail, selectIsLoggedIn, selectName } from '../nxjs/login.selectors';
import { Router } from '@angular/router';
import * as LoginActions from '../nxjs/login.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-products';

  _isLoggedIn = false;

  name = this.store.pipe(select(selectName));
  email = this.store.pipe(select(selectEmail));

  constructor(private store: Store, private router: Router) {
    console.log('AppRoutingModule:constructor', store);

    store.pipe(select(selectIsLoggedIn)).subscribe(isLoggedIn => {

      this._isLoggedIn = isLoggedIn;

      console.log('AppRoutingModule:newLoginState:', { isLoggedIn });

      if (isLoggedIn) {

        if (window.location.pathname !== '/home') {
          console.log('1sec.. redirecting to home');
          router.navigate(['/home'])
        } else {
          console.log('already in home page');
        }

      } else {
        if (window.location.pathname !== '/login') {
          console.log('1sec.. redirecting to login');
          router.navigate(['/login'])
        } else {
          console.log('already in login page');
        }
      }
    });

  }

  logout(): void {
    this.store.dispatch(LoginActions.logoutNow())
  }

}
