import { Component, OnInit } from '@angular/core';
import { aboutMercadona } from './home.text'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  title = 'Mercadona est soucieuse de l\'environnement';
  aboutMercadona: string = '';

  constructor() { }

  ngOnInit(): void {
    this.aboutMercadona = aboutMercadona;
  }
}

