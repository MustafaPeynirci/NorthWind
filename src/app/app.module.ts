import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NaviComponent } from './layouts/navi/navi.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { VatPipe } from './pipes/vat.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { LoginComponent } from './components/login/login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NaviComponent,
    CategoryListComponent,
    ProductDetailComponent,
    VatPipe,
    FilterPipe,
    CartSummaryComponent,
    CartDetailComponent,
    LoginComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      progressBar:true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
      positionClass: "toast-top-right",
      easing:"ease-in",
      easeTime:1000
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
