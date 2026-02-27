import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

  addmessage : string =''
  constructor(private product_Service:ProductService) { }

  ngOnInit(): void {

    
  }

  submit(data:product){
    this.product_Service.sellerAddProduct(data).subscribe((res)=>{
      console.log(res);
      if (res) {
        this.addmessage = "Product has been added"
        
      }

    });
    setTimeout(()=>{
        this.addmessage =''
    }, 3000);
    
  }

}
