import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Slider için örnek veriler
  sliderItems = [
    { 
      id: 1, 
      title: 'Yaz İndirimleri', 
      description: 'Tüm yaz ürünlerinde %50\'ye varan indirimler', 
      imageUrl: 'assets/images/slider/summer-sale.jpg',
      link: '/category/summer'
    },
    { 
      id: 2, 
      title: 'Yeni Koleksiyon', 
      description: 'Sonbahar koleksiyonumuzu keşfedin', 
      imageUrl: 'assets/images/slider/autumn-collection.jpg',
      link: '/category/autumn'
    },
    { 
      id: 3, 
      title: 'Özel Fırsatlar', 
      description: 'Sınırlı süre için özel fırsatlar', 
      imageUrl: 'assets/images/slider/special-offers.jpg',
      link: '/category/special'
    }
  ];

  // Önerilen ürünler için örnek veriler
  recommendedProducts = [
    { 
      id: 1, 
      name: 'Turuncu Sweatshirt', 
      price: 199.99, 
      imageUrl: 'assets/images/products/orange-sweatshirt.jpg',
      discount: 15,
      rating: 4.5
    },
    { 
      id: 2, 
      name: 'Spor Ayakkabı', 
      price: 299.99, 
      imageUrl: 'assets/images/products/sport-shoes.jpg',
      discount: 0,
      rating: 4.2
    },
    { 
      id: 3, 
      name: 'Deri Cüzdan', 
      price: 149.99, 
      imageUrl: 'assets/images/products/leather-wallet.jpg',
      discount: 10,
      rating: 4.7
    },
    { 
      id: 4, 
      name: 'Akıllı Saat', 
      price: 899.99, 
      imageUrl: 'assets/images/products/smart-watch.jpg',
      discount: 20,
      rating: 4.8
    }
  ];

  // Kategoriler için örnek veriler
  categories = [
    { 
      id: 1, 
      name: 'Elektronik', 
      imageUrl: 'assets/images/categories/electronics.jpg',
      productCount: 120
    },
    { 
      id: 2, 
      name: 'Giyim', 
      imageUrl: 'assets/images/categories/clothing.jpg',
      productCount: 350
    },
    { 
      id: 3, 
      name: 'Ev & Yaşam', 
      imageUrl: 'assets/images/categories/home-living.jpg',
      productCount: 230
    },
    { 
      id: 4, 
      name: 'Spor', 
      imageUrl: 'assets/images/categories/sports.jpg',
      productCount: 180
    }
  ];

  // Başarılı satıcılar için örnek veriler
  topSellers = [
    { 
      id: 1, 
      name: 'TechStore', 
      rating: 4.9, 
      imageUrl: 'assets/images/sellers/tech-store.jpg',
      productCount: 250
    },
    { 
      id: 2, 
      name: 'FashionHub', 
      rating: 4.7, 
      imageUrl: 'assets/images/sellers/fashion-hub.jpg',
      productCount: 320
    },
    { 
      id: 3, 
      name: 'HomeDecor', 
      rating: 4.8, 
      imageUrl: 'assets/images/sellers/home-decor.jpg',
      productCount: 180
    }
  ];

  // Aktif slider indeksi
  activeSlideIndex = 0;

  // Slider için next ve previous fonksiyonları
  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.sliderItems.length;
  }

  prevSlide() {
    this.activeSlideIndex = (this.activeSlideIndex - 1 + this.sliderItems.length) % this.sliderItems.length;
  }

  // Belirli bir slider'a geçiş yapma
  goToSlide(index: number) {
    this.activeSlideIndex = index;
  }
}
