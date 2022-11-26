import { LoginModel } from './../../models/login-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from './../../models/user-model';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userControlForm:FormGroup
  users:UserModel[]=[]
  constructor(private loginService:LoginService, private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm()  
  }

  showSuccess(){
    this.toastr.success("Başarılı")
  }
  getUsers(){
    this.loginService.getUsers().subscribe(data=>{
      this.users=data
    })
  }
  createLoginForm(){
    this.userControlForm = this.formBuilder.group({
      email:["", Validators.required],
      password:["", Validators.required]
    })
  }
  userControl(){
    let user:LoginModel = this.userControlForm.value
    this.loginService.loginUser(user).subscribe(data=>{
      if(this.userControlForm.value.email == "" && this.userControlForm.value.password == ""){
        this.toastr.warning("Lütfen bilgileri doldurun!")
        return
      }
      if(data.length>0){
        this.router.navigate(["products"])
        this.toastr.success("Başarılı")
      }
      else {
        this.toastr.warning("Hatalı bilgi, lütfen kontrol ediniz.")
      }
    })

      
      
  }



}
