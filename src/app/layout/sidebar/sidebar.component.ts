import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  categories = [
    { id: 1, name: 'Elektronik', url: '/category/electronics' },
    { id: 2, name: 'Giyim', url: '/category/clothing' },
    { id: 3, name: 'Ev & Yaşam', url: '/category/home-living' },
    { id: 4, name: 'Spor', url: '/category/sports' },
    { id: 5, name: 'Kozmetik', url: '/category/cosmetics' },
    { id: 6, name: 'Kitap & Müzik', url: '/category/books-music' }
  ];
}
