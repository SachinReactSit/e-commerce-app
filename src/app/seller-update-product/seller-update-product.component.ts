import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-types';
@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  productData: undefined | product
  productUpdatemessage: undefined | string
  constructor(private route: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    console.log(productId);
    productId && this.product.getProduct(productId).subscribe((data) => {
      console.log('data', data);
      this.productData = data

    })

  }

  submit(data: any) {

    if (this.productData) {
      data.id=this.productData.id
    }
    this.product.updateProduct(data).subscribe((res) => {
      console.log(res);
      if (res) {
        this.productUpdatemessage = "Product has been updated"
      }

    });
    setTimeout(() => {
      this.productUpdatemessage = undefined
    }, 3000)
  }
}
