import ICartItem  from 'src/app/cart-item';
import { CART_ITEMS } from './../cart-items';
import { Injectable } from '@angular/core';
import IProduct from '../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCart(){
    return CART_ITEMS;
  }
  addToCart(product:IProduct){
    let cartItem:ICartItem = CART_ITEMS.find(item=>item.product.id === product.id)

    if(cartItem){
      cartItem.quantity++
    }
    else{
      CART_ITEMS.push({quantity:1, product:product})
    }


  }

}
