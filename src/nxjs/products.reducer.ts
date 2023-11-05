import { Action, createReducer, on } from '@ngrx/store';
import * as ProductActions from './products.actions';

export interface ProductInfo {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: { rate: number, count: number }
};

export interface ProductState {
  products: ProductInfo[],
  isLoading: boolean,
  error?: string
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
};

const productReducer = createReducer(
  initialState,
  on(ProductActions.setProducts, (state, { products }) => ({
    ...state,
    isLoading: false,
    products: products
  })),
);

export function reducer(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}