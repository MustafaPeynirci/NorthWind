import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm:FormGroup
  constructor(private formBuilder:FormBuilder, private loginService:LoginService) { }

  ngOnInit(): void {
    this.createUserForm()
  }

  createUserForm(){
    this.userForm = this.formBuilder.group({
      name:["", Validators.required],
      surname:["", Validators.required],
      email:["", Validators.required],
      password:["", Validators.required]
    })
  }
  saveUser(){
    this.loginService.saveUser(this.userForm.value).subscribe(data=>{
      console.log(this.userForm.value);
      console.log(1);
      
      
    })
  }

}
