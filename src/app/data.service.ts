import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  mergeProductsAndPromotions(): Observable<any[]> {
    return new Observable(observer => {
      let products: any[];
      let promotions: any[];

      this.getProducts().subscribe(data => {
        products = data;

        this.getPromotions().subscribe(data => {
          promotions = data;

          for (let product of products) {
            product.en_promotion = promotions.some(promotion => promotion.product === product.id);
          }

          observer.next(products);
          observer.complete();
        });
      });
    });
  }
}