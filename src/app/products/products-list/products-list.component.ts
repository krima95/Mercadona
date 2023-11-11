import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
// ProductsListComponent
export class ProductsListComponent implements OnInit {
  products: any[] = [];
  productsWithoutPromotion: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts().subscribe(
      (data: any[]) => {
        this.products = data; // Récupérer tous les produits
        this.productsWithoutPromotion = data.filter(product => !product.sale_price); // Filtrer les produits sans promotion
      },
      (error) => {
        console.error(error); // Gérer les erreurs éventuelles
      }
    );
  }

  fetchProducts(): Observable<any[]> {
    return this.http.get<any[]>("http://127.0.0.1:8000/api/products/products/?format=json");
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  }
}
