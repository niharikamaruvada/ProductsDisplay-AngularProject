import { createAction, props } from '@ngrx/store';

export const updateName = createAction('[Login] Update Name', props<{ name: string }>());
export const updateEmail = createAction('[Login] Update Email', props<{ email: string }>());
export const loginNow = createAction('[Login] Submit Login');
export const logoutNow = createAction('[Login] Submit Logout');