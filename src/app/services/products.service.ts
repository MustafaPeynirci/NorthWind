import { CategoryListModel } from './../models/category-list-model';
import { ProductDetailModel } from './../models/product-detail-model';
import { ProductListModel } from './../models/product-list-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  path:string = "http://localhost:3000/products"
  queryPath :string=""
  selectedCategory:CategoryListModel;
  constructor(private httpClient:HttpClient) { }
  
  getProducts():Observable<ProductListModel[]>{

    return this.httpClient.get<ProductListModel[]>(this.createApiUrl());
  }

  getProductDetail(id){
    return this.httpClient.get<ProductDetailModel>(this.path+"/"+id)
  }

  getProductsByCategory(categoryId):Observable<ProductListModel[]>{
    return this.httpClient.get<ProductListModel[]>(this.path+"?categoryId="+categoryId);
  }

  setSelectedCategory(category){
    this.selectedCategory = category;
  }

  createApiUrl(){
    if(this.selectedCategory){
      this.queryPath = this.path + "?categoryId="+this.selectedCategory.id
    }

    if(this.selectedCategory){
      this.queryPath = this.path + "?categoryId="+this.selectedCategory.id
    }

    if(this.selectedCategory && this.selectedCategory){
      this.queryPath = this.path + "?categoryId="
      +this.selectedCategory.id+"&categoryId="+this.selectedCategory.id
    }

    if(!this.selectedCategory && !this.selectedCategory){
      this.queryPath = this.path;
     
    }

    return this.queryPath;
    

  }



}
