import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer as loginReducer } from 'src/nxjs/login.reducer';
import { reducer as productReducer } from 'src/nxjs/products.reducer';

import { ProductsEffects } from 'src/nxjs/products.effects';

import { HomeComponent } from 'src/routes/home/home.component';
import { LoginComponent } from 'src/routes/login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      login: loginReducer,
      products: productReducer
    }),
    EffectsModule.forRoot([
      ProductsEffects
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }