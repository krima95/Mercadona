/**import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mercadona';
  product = 0

  
}**/

import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: any[] = [];

  constructor(private dataService: DataService) {}


ngOnInit(): void {
  this.dataService.getProducts().subscribe(
    (data) => {
      console.log(data); // Vérifiez la structure des données
      if (Array.isArray(data)) {
        this.products = data; // Si déjà un tableau, assignez-le directement
      } else if (typeof data === 'object') {
        this.products = Object.values(data); // Transformez l'objet en tableau
      } else {
        console.error('Données non valides'); // Gérez d'autres types de données
      }
    },
    (error) => {
      console.error(error);
    }
  );
}
}
