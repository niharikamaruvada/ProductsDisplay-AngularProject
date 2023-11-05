import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductState } from './products.reducer';

const selectProductState = createFeatureSelector<ProductState>('products');
// gives latest from productreducer

export const selectProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);

export const selectIsProductsLoading = createSelector(
  selectProductState,
  (state: ProductState) => state.isLoading
);

export const selectProductsLoadingError = createSelector(
  selectProductState,
  (state: ProductState) => state.error
);