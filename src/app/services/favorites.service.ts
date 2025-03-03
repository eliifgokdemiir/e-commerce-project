import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: Product[] = [];
  private favoritesSubject = new BehaviorSubject<Product[]>([]);
  
  constructor() {
    // LocalStorage'dan favorileri yükle
    this.loadFavorites();
  }
  
  // Favorileri Observable olarak döndür
  getFavorites(): Observable<Product[]> {
    return this.favoritesSubject.asObservable();
  }
  
  // Favori ürünlerin ID'lerini döndür (ikon rengini değiştirmek için)
  getFavoriteIds(): Observable<number[]> {
    return new Observable<number[]>(observer => {
      this.getFavorites().subscribe(favorites => {
        observer.next(favorites.map(product => product.id));
      });
    });
  }
  
  // Ürünü favorilere ekle
  addToFavorites(product: Product): void {
    // Ürün zaten favorilerde mi kontrol et
    if (!this.favorites.some(p => p.id === product.id)) {
      this.favorites.push(product);
      this.updateFavorites();
    }
  }
  
  // Ürünü favorilerden çıkar
  removeFromFavorites(productId: number): void {
    this.favorites = this.favorites.filter(product => product.id !== productId);
    this.updateFavorites();
  }
  
  // Ürün favorilerde mi kontrol et
  isFavorite(productId: number): boolean {
    return this.favorites.some(product => product.id === productId);
  }
  
  // Favorileri güncelle ve localStorage'a kaydet
  private updateFavorites(): void {
    this.favoritesSubject.next([...this.favorites]);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
  
  // LocalStorage'dan favorileri yükle
  private loadFavorites(): void {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
      this.favoritesSubject.next([...this.favorites]);
    }
  }
} 