import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  /*
  products = [...products];
  */

  products = [
    {
      name: "iPhone",
      stock: 30,
      description: "サンプルテキスト"
    },
    {
      name: "iPad",
      stock: 12,
      description: "タブレットです。"
    },
  ]

  share() {
    window.alert('The product has been shared!');
  }

}
