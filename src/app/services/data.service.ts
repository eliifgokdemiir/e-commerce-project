import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { Seller } from '../models/seller.model';
import { SliderItem } from '../models/slider.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor() { }
  
  getSliderItems(): Observable<SliderItem[]> {
    return of([
      {
        id: 1,
        imageUrl: 'assets/img/slider/slider1.jpg',
        title: 'Yeni Sezon Ürünleri',
        description: 'En yeni ürünleri keşfedin ve modaya ayak uydurun!',
        link: '/category/new-arrivals'
      },
      {
        id: 2,
        imageUrl: 'assets/img/slider/banner1.jpg',
        title: 'Büyük İndirim',
        description: 'Seçili ürünlerde %50\'ye varan indirimler!',
        link: '/category/discounts'
      },
      {
        id: 3,
        imageUrl: 'assets/img/slider/slider2.jpg',
        title: 'Elektronik Fırsatları',
        description: 'En son teknoloji ürünlerinde kaçırılmayacak fırsatlar!',
        link: '/category/electronics'
      }
    ]);
  }
  
  getCategories(): Observable<Category[]> {
    return of([
      {
        id: 1,
        name: 'Elektronik',
        imageUrl: 'assets/img/categories/elektronik.jpg',
        productCount: 1250
      },
      {
        id: 2,
        name: 'Giyim',
        imageUrl: 'assets/img/categories/giyim.webp',
        productCount: 3420
      },
      {
        id: 3,
        name: 'Ev & Yaşam',
        imageUrl: 'assets/img/categories/evyasam.webp',
        productCount: 2180
      },
      {
        id: 4,
        name: 'Spor & Outdoor',
        imageUrl: 'assets/img/categories/spor.webp',
        productCount: 1540
      },
      {
        id: 5,
        name: 'Kozmetik',
        imageUrl: 'assets/images/categories/cosmetics.jpg',
        productCount: 1870
      },
      {
        id: 6,
        name: 'Kitap & Müzik',
        imageUrl: 'assets/images/categories/books-music.jpg',
        productCount: 2350
      },
      {
        id: 7,
        name: 'Oyuncak & Hobi',
        imageUrl: 'assets/images/categories/toys-hobby.jpg',
        productCount: 1280
      },
      {
        id: 8,
        name: 'Mücevher & Aksesuar',
        imageUrl: 'assets/images/categories/jewelry.jpg',
        productCount: 980
      }
    ]);
  }
  
  getRecommendedProducts(): Observable<Product[]> {
    return of([
      {
        id: 1,
        name: 'Akıllı Telefon X Pro',
        description: 'En son teknoloji ile donatılmış, yüksek performanslı akıllı telefon',
        price: 12999.99,
        discount: 15,
        rating: 4.7,
        reviewCount: 245,
        imageUrl: 'assets/img/products/telefon.webp',
        categoryId: 1,
        sellerId: 3,
        inStock: true,
        isFeatured: true,
        isNew: true
      },
      {
        id: 2,
        name: 'Kablosuz Kulaklık',
        description: 'Gürültü önleyici özellikli, uzun pil ömürlü kablosuz kulaklık',
        price: 1499.99,
        discount: 10,
        rating: 4.5,
        reviewCount: 187,
        imageUrl: 'assets/img/products/kulaklık.jpg',
        categoryId: 1,
        sellerId: 2,
        inStock: true,
        isFeatured: true,
        isNew: false
      },
      {
        id: 3,
        name: 'Spor Ayakkabı',
        description: 'Hafif ve rahat, her türlü spora uygun ayakkabı',
        price: 899.99,
        discount: 0,
        rating: 4.3,
        reviewCount: 156,
        imageUrl: 'assets/img/products/sporayakkabi.jpeg',
        categoryId: 2,
        sellerId: 1,
        inStock: true,
        isFeatured: false,
        isNew: true
      },
      {
        id: 4,
        name: 'Akıllı Saat',
        description: 'Sağlık takibi ve bildirimler için çok fonksiyonlu akıllı saat',
        price: 2499.99,
        discount: 20,
        rating: 4.6,
        reviewCount: 132,
        imageUrl: 'assets/img/products/saat.jpg',
        categoryId: 1,
        sellerId: 3,
        inStock: true,
        isFeatured: true,
        isNew: true
      },
      {
        id: 5,
        name: 'Kahve Makinesi',
        description: 'Otomatik programlama özellikli, şık tasarımlı kahve makinesi',
        price: 3499.99,
        discount: 5,
        rating: 4.4,
        reviewCount: 98,
        imageUrl: 'assets/images/products/coffee-maker.jpg',
        categoryId: 3,
        sellerId: 4,
        inStock: true,
        isFeatured: false,
        isNew: false
      },
      {
        id: 6,
        name: 'Yoga Matı',
        description: 'Kaymaz yüzeyli, çevre dostu malzemeden üretilmiş yoga matı',
        price: 299.99,
        discount: 0,
        rating: 4.2,
        reviewCount: 75,
        imageUrl: 'assets/images/products/yoga-mat.jpg',
        categoryId: 4,
        sellerId: 5,
        inStock: true,
        isFeatured: false,
        isNew: false
      },
      {
        id: 7,
        name: 'Cilt Bakım Seti',
        description: 'Doğal içerikli, her cilt tipine uygun bakım seti',
        price: 799.99,
        discount: 25,
        rating: 4.8,
        reviewCount: 112,
        imageUrl: 'assets/images/products/skincare.jpg',
        categoryId: 5,
        sellerId: 6,
        inStock: true,
        isFeatured: true,
        isNew: true
      },
      {
        id: 8,
        name: 'Bluetooth Hoparlör',
        description: 'Su geçirmez, yüksek ses kaliteli taşınabilir hoparlör',
        price: 899.99,
        discount: 10,
        rating: 4.5,
        reviewCount: 89,
        imageUrl: 'assets/images/products/speaker.jpg',
        categoryId: 1,
        sellerId: 2,
        inStock: true,
        isFeatured: false,
        isNew: false
      }
    ]);
  }
  
  getTopSellers(): Observable<Seller[]> {
    return of([
      {
        id: 1,
        name: 'Spor Dünyası',
        imageUrl: 'assets/images/sellers/seller1.jpg',
        rating: 4.8,
        productCount: 345,
        description: 'Spor ve outdoor ürünleri',
        joinDate: new Date('2020-03-15')
      },
      {
        id: 2,
        name: 'Teknoloji Merkezi',
        imageUrl: 'assets/images/sellers/seller2.jpg',
        rating: 4.7,
        productCount: 512,
        description: 'En son teknoloji ürünleri',
        joinDate: new Date('2019-08-22')
      },
      {
        id: 3,
        name: 'Moda Butiği',
        imageUrl: 'assets/images/sellers/seller3.jpg',
        rating: 4.6,
        productCount: 278,
        description: 'Trend giyim ve aksesuarlar',
        joinDate: new Date('2021-01-10')
      },
      {
        id: 4,
        name: 'Ev Dekorasyon',
        imageUrl: 'assets/images/sellers/seller4.jpg',
        rating: 4.5,
        productCount: 189,
        description: 'Şık ve modern ev dekorasyon ürünleri',
        joinDate: new Date('2020-11-05')
      }
    ]);
  }
} 