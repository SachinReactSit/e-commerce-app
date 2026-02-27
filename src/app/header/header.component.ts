import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import { ProductService } from '../services/product.service';
import { subscribe } from 'diagnostics_channel';
import { product } from '../data-types';
import { faTrash, faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  menuType : String = 'default'
  sellerName : String = '';
  searchResult : undefined | product[]
  constructor(private router: Router , private product_Service:ProductService) { }

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {


      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {

          let sellerStore = localStorage.getItem('seller');
          let sellerData =sellerStore && JSON.parse(sellerStore)[0]
          this.sellerName = sellerData.name
          console.log('this is seller area');
          this.menuType='seller'
        } else {
          console.log('Out side seller area');
          this.menuType='default'
        }
      }

    })
  }

  logout(){
    localStorage.removeItem('seller')
    this.router.navigate(['/'])
  }

  serachproduct(query:KeyboardEvent){
    const element = query.target as HTMLInputElement;
    console.log('-------' , element.value);
    this.product_Service.searchProduct(element.value).subscribe((res)=>{
      console.log(res);
      if (res.length>5) {
        res.length=5;
      }
     
      this.searchResult = res
    })
  }

  hideSearch(){
    this.searchResult=undefined
  }

  submitSearch(val:string){
    console.log(val);
    this.router.navigate([`search/${val}`])
    
  }

}
