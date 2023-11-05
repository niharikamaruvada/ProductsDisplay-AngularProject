import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as LoginActions from '../../nxjs/login.actions'; 
import { Store, select } from '@ngrx/store';
import { LoginState } from '../../nxjs/login.reducer';
import { selectEmail, selectName } from '../../nxjs/login.selectors';
2
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string = '';
  email: string = '';

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<LoginState>) {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.store.pipe(select(selectName)).subscribe((name) => {
      this.name = name;
    });

    this.store.pipe(select(selectEmail)).subscribe((email) => {
      this.email = email;
    });
  }

  updateName(name: string) {
    console.log('name change event', { name });
    this.store.dispatch(LoginActions.updateName({ name }));
  }

  updateEmail(email: string) {
    this.store.dispatch(LoginActions.updateEmail({ email }));
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = {
        name: this.loginForm.get('name')!.value,
        email: this.loginForm.get('email')!.value
      };
      this.store.dispatch(LoginActions.loginNow());
    }
  }
}
