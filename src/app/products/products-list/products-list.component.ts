import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  filteredProducts: any[] = [];
  selectedCategoryId: string = '';
  selectedCategoryTitle: string = ''; // Ajout de la propriété pour le titre de la catégorie sélectionnée

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    this.dataService.mergeProductsAndPromotions().subscribe(
      (products: any[]) => {
        this.products = products;
        this.filteredProducts = [...this.products];
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  loadCategories(): void {
    this.dataService.getCategories().subscribe(
      (categories: any[]) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  filterByCategory(): void {
    if (!this.selectedCategoryId) {
      // Si aucune catégorie n'est sélectionnée, affichez tous les produits.
      this.filteredProducts = [...this.products];
    } else {
      // Filtrez les produits par catégorie sélectionnée.
      this.filteredProducts = this.products.filter(product => product.category.id === parseInt(this.selectedCategoryId, 10));
    }
  }
  
  
  getCategoryTitle(categoryId: string): string {
    const category = this.categories.find((c) => c.id === categoryId);
    return category ? category.category_title : '';
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  }
}
