import  ICartItem  from 'src/app/cart-item';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(public cartService:CartService) { }

  cartItems:ICartItem[]=[]
  totalPrice:number = 0
  totalQuantity:number = 0
  ngOnInit(): void {
    this.cartItems = this.cartService.getCart()
  }

}
