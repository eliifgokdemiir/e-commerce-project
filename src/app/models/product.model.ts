export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  categoryId: number;
  sellerId: number;
  inStock: boolean;
  isFeatured: boolean;
  isNew: boolean;
} 