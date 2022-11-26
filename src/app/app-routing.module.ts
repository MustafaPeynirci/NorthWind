import { UserLoginComponent } from './components/user-login/user-login.component';
import { LoginComponent } from './components/login/login.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"products", component:ProductListComponent},
  {path:"",pathMatch:"full", component:ProductListComponent},
  {path:"productdetail/:id", component:ProductDetailComponent},
  {path:"products/category/:categoryid", component:ProductListComponent},
  {path:"cart-detail", component:CartDetailComponent},
  {path:"login", component:LoginComponent},
  {path:"user-login", component:UserLoginComponent}

];
//products/category/8
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
