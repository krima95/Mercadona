import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from '../app/products/products-list/products-list.component'
import { PromotionsComponent } from '../app/promo-page/promotions/promotions.component'


const routes: Routes = [
  { path:'products', component: ProductsListComponent},
  { path:'', component: PromotionsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
