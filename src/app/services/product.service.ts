import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { logIn, product, SignUp } from '../data-types';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient , private router:Router) { }

  sellerAddProduct(data:product){
    console.log('service called');
    return this.http.post('http://localhost:3000/products' , data)
    
  }

  productList(){
    return this.http.get<product[]>('http://localhost:3000/products')
  }

  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }

  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }

  updateProduct(product:product){
    return this.http.put<product>(`http://localhost:3000/products/${product.id}` , product)
  }
  popularProduct(){
    return this.http.get('http://localhost:3000/banners?_limit=4')
  }

  trendyProduct(){
    return this.http.get<product[]>('http://localhost:3000/products?_limit=8')
  }

  searchProduct(query : string){
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`)
  }
}
