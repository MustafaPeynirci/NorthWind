import { CartService } from './../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductListModel } from './../../models/product-list-model';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import IProduct from 'src/app/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:ProductListModel[]=[]
  filterText:string="a"
  constructor(private productService:ProductsService, private activatedRoute:ActivatedRoute, private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getProducts()
    });
  }

  getProducts(){
    this.productService.getProducts().subscribe(data=>{
      this.products = data;
    })
  }
  getProductsByCategory(categoryId){
    this.productService.getProductsByCategory(categoryId).subscribe(data=>{
      this.products = data;
    })
  }
  addToCart(product:IProduct){
    this.cartService.addToCart(product)
  }

}


