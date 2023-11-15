import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    
  ]
})
export class ProductsModule { 
  
}
