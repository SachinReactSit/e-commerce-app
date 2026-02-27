import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuType : String = 'default'
  sellerName : String = '';
  constructor(private router: Router) { }

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

}
