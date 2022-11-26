import  ICartItem  from 'src/app/cart-item';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import IProduct from 'src/app/product';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  
  constructor(public cartService:CartService) { }
  cartItems:ICartItem[] = []
  totalPrice:number = 0
  totalQuantity:number = 0

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart()
  }

  deleteToCart(product:IProduct){
    this.cartService.deleteToCart(product)
  }

}
