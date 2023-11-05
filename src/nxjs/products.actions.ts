import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction('[Products] Load Products');
export const setProducts = createAction('[Products] Set Products', props<{ products: any[] }>());
export const setError = createAction('[Products] Set Error', props<{ message: string }>());