import { Component, OnInit } from '@angular/core';
import { products } from './products.list'



export interface products {
  title: string;
  type: string;
  description: string;
  img: string;
  price: number;
}



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  
})
export class ProductsListComponent implements OnInit {

  productsList = products;
  displayedColumns: string[] = ['title', 'type', 'description', 'imgageURL', 'price'];
  dataSource = products;
 

  constructor() { }

  ngOnInit(): void {
   
  }

}



