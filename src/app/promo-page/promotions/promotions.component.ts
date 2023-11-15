import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  productsWithPromotion: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.fetchProducts().subscribe(
      (products: any[]) => {
        this.fetchPromotions().subscribe(
          (promotions: any[]) => {
            this.productsWithPromotion = this.mergeProductsAndPromotions(products, promotions);
            console.log(this.productsWithPromotion); 
            this.productsWithPromotion = this.productsWithPromotion.filter(product => product.en_promotion);
          },
          (error) => {
            console.error(error);
            // Gestion des erreurs liées aux promotions
          }
        );
      },
      (error) => {
        console.error(error);
        // Gestion des erreurs liées aux produits
      }
    );
  }
  

  fetchProducts(): Observable<any[]> {
    return this.http.get<any[]>("http://127.0.0.1:8000/api/products/products/?format=json");
  }

  fetchPromotions(): Observable<any[]> {
    return this.http.get<any[]>("http://127.0.0.1:8000/api/products/promotions/?format=json");
  }

  mergeProductsAndPromotions(products: any[], promotions: any[]): any[] {
    const today = new Date();

    return products.map(product => {
      const productPromotions = promotions.filter(promotion => {
        return (
          promotion.product === product.id &&
          new Date(promotion.start_date) <= today &&
          new Date(promotion.end_date) >= today
        );
      });

      if (productPromotions.length > 0) {
        product.en_promotion = true;
        product.promotions = productPromotions.map(promotion => {
          return {
            ...promotion,
            promotion_start_date: promotion.start_date,
            promotion_end_date: promotion.end_date
          };
        });
      } else {
        product.en_promotion = false;
      }
      return product;
    });
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  }

  getProductStartDate(product: any): Date | undefined {
    if (product.en_promotion && product.promotions.length > 0) {
      return new Date(product.promotions[0].promotion_start_date);
    }
    return undefined;
  }

  getProductEndDate(product: any): Date | undefined {
    if (product.en_promotion && product.promotions.length > 0) {
      return new Date(product.promotions[0].promotion_end_date);
    }
    return undefined;
  }
}
