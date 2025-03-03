import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { FavoritesService } from '../../services/favorites.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit {
  favorites: Product[] = [];
  
  constructor(private favoritesService: FavoritesService) {}
  
  ngOnInit(): void {
    this.loadFavorites();
  }
  
  loadFavorites(): void {
    this.favoritesService.getFavorites().subscribe(favorites => {
      this.favorites = favorites;
    });
  }
  
  removeFromFavorites(productId: number): void {
    this.favoritesService.removeFromFavorites(productId);
  }
  
  addToCart(product: Product): void {
    console.log('Ürün sepete eklendi:', product);
    // Burada sepet servisini kullanarak ürünü sepete ekleyebilirsiniz
    // Örnek: this.cartService.addToCart(product);
    
    // Kullanıcıya bildirim gösterme
    alert(`${product.name} sepete eklendi!`);
  }
}
