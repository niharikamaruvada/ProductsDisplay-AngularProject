import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductDataService } from 'src/service/product-data.service';
import * as ProductActions from './products.actions';

@Injectable()
export class ProductsEffects {

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.loadProducts),
    mergeMap(() =>
      this.productService
        .getProducts()
        .pipe(
          map(_products => ProductActions.setProducts({ products: _products })),
          catchError(async () => ProductActions.setError({ message: 'Error loading products' }))
        ))
  ))

  constructor(private actions$: Actions, private productService: ProductDataService) { }
}