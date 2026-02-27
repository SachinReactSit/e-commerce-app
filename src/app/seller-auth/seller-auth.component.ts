import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-types';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  showLogin= false ; 
  authError: String = '';
  constructor(private seller:SellerService  ) { }

  ngOnInit(): void {
    this.seller.relodSeller()
  }

  signup(data : SignUp): void{
    console.log(data)
     this.seller.userSignUp(data)
    
  }
  login(data : SignUp): void{
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((loginError)=>{
      console.log(loginError);

      if (loginError) {

        this.authError = "Email or Password is not correct"
      }
      
    })
    
  }

  openlogin(){
    this.showLogin = true
  }

  opensignup(){
    this.showLogin = false
  }
}
