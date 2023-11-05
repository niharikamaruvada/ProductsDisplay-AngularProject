import { Component } from '@angular/core';
import { ProductDataService } from '../../service/product-data.service';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from 'src/nxjs/login.selectors';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { selectProducts } from 'src/nxjs/products.selectors';
import { ProductInfo } from 'src/nxjs/products.reducer';
import * as ProductActions from 'src/nxjs/products.actions';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    products$: Observable<ProductInfo[]> = this.store.select(selectProducts);

    constructor(
        private productData: ProductDataService,
        private router: Router,
        private store: Store,
    ) {
        store.select(selectIsLoggedIn).subscribe((isLoggedIn) => {
            if (!isLoggedIn) {
                alert("Please login to access home page")
                router.navigate(['/login'])
            }
        });
    }

    ngOnInit() {
        this.store.dispatch(ProductActions.loadProducts());
    }
}
