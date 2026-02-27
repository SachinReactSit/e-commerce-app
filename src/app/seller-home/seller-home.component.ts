import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-types';
import { faTrash , faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productList : undefined | product[]
  productdeleteMessage  :undefined | string ;
  icon = faTrash 
  edit = faEdit

  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.product.productList().subscribe((res)=>{
      console.log('product' ,res);

      this.productList=res ; 
      
    })
  }

  deleteProduct(id:number){
    
    this.product.deleteProduct(id).subscribe((res:any)=>{
      this.list();
      console.log('id :' , res );
      this.productdeleteMessage = 'Product has been deleted'
      
    })

    setTimeout(()=>{
      this.productdeleteMessage = undefined
    }, 3000)
    
  }

}
