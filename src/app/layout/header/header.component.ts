import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Sepetteki ürün sayısı
  cartItemCount = 0; // Başlangıçta 0 olarak ayarlandı
  
  // Daha sonra bir servis aracılığıyla gerçek sepet verilerini alabilirsiniz
  // Örneğin:
  // constructor(private cartService: CartService) {
  //   this.cartService.cartItems$.subscribe(items => {
  //     this.cartItemCount = items.length;
  //   });
  // }
}
