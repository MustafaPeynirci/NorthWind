import { CartService } from './../../services/cart.service';
import { SomeService } from './../../services/some.service';
import { Component, OnInit } from '@angular/core';
import ICartItem from 'src/app/cart-item';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(public someService:SomeService, private cartService:CartService) { }
  
  cartItems:ICartItem[] = []

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart()
  }

}
