import { Component, OnInit } from '@angular/core';
import { products } from './products.list'


// export interface products {
//   title: string;
//   type: string;
//   description: string;
//   img: any;
//   price: number;
// }


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  
})
export class ProductsListComponent implements OnInit {

  productsList = []
  displayedColumns: string[] = ['title', 'type', 'description', 'img', 'price'];
  dataSource = products;
  

  constructor() { }

  ngOnInit(): void {
    // productsList = products
  }

}
