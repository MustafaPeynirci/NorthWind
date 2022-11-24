import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryListModel } from '../models/category-list-model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  path:string = "http://localhost:3000/categories"
  constructor(private httpClient:HttpClient) { }
  
  getCategories():Observable<CategoryListModel[]>{
    return this.httpClient.get<CategoryListModel[]>(this.path);
  }
}
