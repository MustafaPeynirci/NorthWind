import { LoginModel } from './../models/login-model';
import { UserModel } from './../models/user-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = "http://localhost:3000/users"
  constructor(private httpClient:HttpClient ) { }

  saveUser(value:any){
    return this.httpClient.post(this.apiUrl, value)
  }
  getUsers():Observable<UserModel[]>{
    return this.httpClient.get<UserModel[]>(this.apiUrl)
  }
  loginUser(user:LoginModel):Observable<UserModel[]>{
    return this.httpClient.get<UserModel[]>(this.apiUrl + "?email=" + user.email + "&password=" + user.password)
  }


}
