import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, MatIconModule],
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
