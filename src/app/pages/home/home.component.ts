import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { DataService } from '../../services/data.service';
import { FavoritesService } from '../../services/favorites.service';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';
import { Seller } from '../../models/seller.model';
import { SliderItem } from '../../models/slider.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatIconModule,
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Veri modelleri
  sliderItems: SliderItem[] = [];
  categories: Category[] = [];
  recommendedProducts: Product[] = [];
  topSellers: Seller[] = [];
  
  // Favori ürün ID'leri
  favoriteProductIds: number[] = [];
  
  // Aktif slide indeksi
  activeSlideIndex = 0;
  
  constructor(
    private dataService: DataService,
    private favoritesService: FavoritesService
  ) {}
  
  ngOnInit(): void {
    // Verileri servisten yükleme
    this.loadSliderItems();
    this.loadCategories();
    this.loadRecommendedProducts();
    this.loadTopSellers();
    
    // Favori ürün ID'lerini yükle
    this.favoritesService.getFavoriteIds().subscribe(ids => {
      this.favoriteProductIds = ids;
    });
    
    // Slider otomatik geçiş için zamanlayıcı
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  
  // Veri yükleme metodları
  loadSliderItems(): void {
    this.dataService.getSliderItems().subscribe(items => {
      this.sliderItems = items;
    });
  }
  
  loadCategories(): void {
    this.dataService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  
  loadRecommendedProducts(): void {
    this.dataService.getRecommendedProducts().subscribe(products => {
      this.recommendedProducts = products;
    });
  }
  
  loadTopSellers(): void {
    this.dataService.getTopSellers().subscribe(sellers => {
      this.topSellers = sellers;
    });
  }
  
  // Slider kontrol metodları
  prevSlide() {
    this.activeSlideIndex = this.activeSlideIndex === 0 ? 
      this.sliderItems.length - 1 : this.activeSlideIndex - 1;
  }
  
  nextSlide() {
    this.activeSlideIndex = this.activeSlideIndex === this.sliderItems.length - 1 ? 
      0 : this.activeSlideIndex + 1;
  }
  
  goToSlide(index: number) {
    this.activeSlideIndex = index;
  }
  
  // Sepete ürün ekleme metodu
  addToCart(product: Product) {
    console.log('Ürün sepete eklendi:', product);
    // Burada sepet servisini kullanarak ürünü sepete ekleyebilirsiniz
    // Örnek: this.cartService.addToCart(product);
    
    // Kullanıcıya bildirim gösterme
    alert(`${product.name} sepete eklendi!`);
  }
  
  // Favorilere ekleme/çıkarma metodu
  toggleFavorite(product: Product): void {
    if (this.isFavorite(product.id)) {
      this.favoritesService.removeFromFavorites(product.id);
    } else {
      this.favoritesService.addToFavorites(product);
    }
  }
  
  // Ürün favorilerde mi kontrol et
  isFavorite(productId: number): boolean {
    return this.favoriteProductIds.includes(productId);
  }
}
