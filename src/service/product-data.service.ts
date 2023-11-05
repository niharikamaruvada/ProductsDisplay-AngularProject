import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInfo } from 'src/nxjs/products.reducer';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<ProductInfo[]>('https://fakestoreapi.com/products');
  }
}
