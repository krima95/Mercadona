import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}products/products/?format=json`);
  }

  getPromotions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}products/promotions/?format=json`);
  }

  getCategories(): Observable<any[]> {
    // Modification ici pour récupérer uniquement les catégories
    return this.http.get<any[]>(`${this.apiUrl}products/products/?format=json`).pipe(
      map(products => products.map(product => product.category))
    );
  }

  mergeProductsAndPromotions(): Observable<any[]> {
    return forkJoin([this.getProducts(), this.getPromotions()]).pipe(
      map(([products, promotions]) => {
        const productsWithPromotion = products.map(product => ({
          ...product,
          en_promotion: promotions.some(promotion => promotion.product === product.id)
        }));
        return productsWithPromotion;
      })
    );
  }
}
