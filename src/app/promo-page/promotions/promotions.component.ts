import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
// PromotionsComponent
export class PromotionsComponent implements OnInit {
  productsWithPromotion: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts().subscribe(
      (data: any[]) => {
        this.productsWithPromotion = data.filter(product => product.sale_price); // Filtrer les produits avec promotion
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
