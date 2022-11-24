import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NaviComponent } from './layouts/navi/navi.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { VatPipe } from './pipes/vat.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NaviComponent,
    CategoryListComponent,
    ProductDetailComponent,
    VatPipe,
    FilterPipe,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
