export interface Category {
  id: number;
  name: string;
  imageUrl: string;
  productCount: number;
  parentId?: number;
} 