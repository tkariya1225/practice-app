import { Component, OnInit } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products:Product[] = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  notify() {
    window.alert('この商品を入荷したら通知します!');
  }
}
