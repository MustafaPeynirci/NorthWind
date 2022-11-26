import ICartItem  from 'src/app/cart-item';
import { CART_ITEMS } from './../cart-items';
import { Injectable } from '@angular/core';
import IProduct from '../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  totalPrice:number = 0;
  totalQuantity:number = 0;
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
    this.addCartPrice(product)
  }
  deleteToCart(product:IProduct){
    let cartItem:ICartItem = CART_ITEMS.find(item=>item.product.id === product.id)

      if(cartItem.quantity>1){
        this.totalPrice -= cartItem.product.unitPrice
        cartItem.quantity--
      }
      else{
        this.totalPrice -= cartItem.product.unitPrice
        CART_ITEMS.splice(CART_ITEMS.indexOf(cartItem),1)
      }
    
  }

  addCartPrice(product:IProduct){
    this.totalPrice+=product.unitPrice
  }
  addCartQuantity(cart:ICartItem){
    this.totalQuantity+=cart.quantity
  }


}
