import { Action, createReducer, on } from '@ngrx/store';
import * as LoginActions from './login.actions';

export interface LoginState {
  isLoggedIn: boolean;
  name: string;
  email: string;
}

const initialState: LoginState = {
  name: '',
  email: '',
  isLoggedIn: false
};

const loginReducer = createReducer(
  initialState,
  on(LoginActions.updateName, (state, { name }) => ({ ...state, name })),
  on(LoginActions.updateEmail, (state, { email }) => ({ ...state, email })),
  on(LoginActions.loginNow, (state,) => ({ ...state, isLoggedIn: true })),
  on(LoginActions.logoutNow, (state,) => ({ ...state, isLoggedIn: false })),
);

export function reducer(state: LoginState | undefined, action: Action) {
  return loginReducer(state, action);
}