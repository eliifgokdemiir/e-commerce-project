import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';

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
  // Slider için örnek veriler
  sliderItems = [
    { 
      id: 1, 
      title: 'Yaz İndirimleri', 
      description: 'Tüm yaz ürünlerinde %50\'ye varan indirimler', 
      imageUrl: 'assets/img/slider/slider1.jpg',
      link: '/category/summer'
    },
    { 
      id: 2, 
      title: 'Yeni Koleksiyon', 
      description: 'Sonbahar koleksiyonumuzu keşfedin', 
      imageUrl: 'assets/img/slider/banner1.png',
      link: '/category/autumn'
    },
    { 
      id: 3, 
      title: 'Özel Fırsatlar', 
      description: 'Sınırlı süre için özel fırsatlar', 
      imageUrl: 'assets/img/slider/slider2.jpg',
      link: '/category/special'
    }
  ];

  // Önerilen ürünler için örnek veriler
  recommendedProducts = [
    { 
      id: 1, 
      name: 'Turuncu Sweatshirt', 
      price: 199.99, 
      imageUrl: 'assets/img/products/turuncu.jpg',
      discount: 15,
      rating: 4.5
    },
    { 
      id: 2, 
      name: 'Spor Ayakkabı', 
      price: 299.99, 
      imageUrl: 'assets/img/products/sporayakkabi.jpeg',
      discount: 0,
      rating: 4.2
    },
    { 
      id: 3, 
      name: 'Deri Cüzdan', 
      price: 149.99, 
      imageUrl: 'assets/img/products/dericuzdan.webp',
      discount: 10,
      rating: 4.7
    },
    { 
      id: 4, 
      name: 'Akıllı Saat', 
      price: 899.99, 
      imageUrl: 'assets/img/products/saat.jpg',
      discount: 20,
      rating: 4.8
    }
  ];

  // Kategoriler için örnek veriler
  categories = [
    { 
      id: 1, 
      name: 'Elektronik', 
      imageUrl: 'assets/img/categories/elektronik.jpg',
      productCount: 120
    },
    { 
      id: 2, 
      name: 'Giyim', 
      imageUrl: 'assets/img/categories/giyim.webp',
      productCount: 350
    },
    { 
      id: 3, 
      name: 'Ev & Yaşam', 
      imageUrl: 'assets/img/categories/evyasam.webp',
      productCount: 230
    },
    { 
      id: 4, 
      name: 'Spor', 
      imageUrl: 'assets/img/categories/spor.webp',
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

  // Sepete ürün ekleme metodu
  addToCart(product: any) {
    console.log('Ürün sepete eklendi:', product);
    // Burada sepet servisini kullanarak ürünü sepete ekleyebilirsiniz
    // Örnek: this.cartService.addToCart(product);
    
    // Kullanıcıya bildirim gösterme
    alert(`${product.name} sepete eklendi!`);
  }

  ngOnInit() {
    // Component initialization logic
  }
}
