import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LoginState } from './login.reducer';

const selectLoginState = createFeatureSelector<LoginState>('login');
// gives latest from loginReducer...

// Select the name from the login state
export const selectName = createSelector(
  selectLoginState,
  (state: LoginState) => state.name
);

// Select the email from the login state
export const selectEmail = createSelector(
  selectLoginState,
  (state: LoginState) => state.email
);

export const selectIsLoggedIn = createSelector(selectLoginState, (state: LoginState) => state.isLoggedIn);