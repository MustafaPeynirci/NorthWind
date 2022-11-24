import { SomeService } from './../../services/some.service';
import { ProductsService } from './../../services/products.service';
import { CategoryListModel } from './../../models/category-list-model';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  currentCategory:CategoryListModel;
  categories:CategoryListModel[]=[];
  counterOfCategory:number = 0;
  constructor(private categoriesService:CategoriesService,
              private productService:ProductsService,
              private someService:SomeService
  ) { }

  ngOnInit(): void {
   this.getCategories();
   this.counterOfCategory = this.someService.counter;
  }

  getCategories(){
    this.categoriesService.getCategories().subscribe(data=>{
      this.categories = data;
    })
  }

  selectCategory(category){
    this.currentCategory = category;
    this.productService.setSelectedCategory(category)
  }

  increase(){
    this.counterOfCategory = this.someService.increase()
  }

}
