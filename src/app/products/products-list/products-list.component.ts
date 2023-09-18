import { Component, OnInit } from '@angular/core';
import { products } from './products.list'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  
})
export class ProductsListComponent implements OnInit {
  products: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.products = products;
  }

}



