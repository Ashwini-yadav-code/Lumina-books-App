
export type Screen = 'home' | 'explore' | 'library' | 'community' | 'profile' | 'detail' | 'checkout' | 'gift';

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  rating: number;
  reviews?: string;
  matchPercentage?: number;
  tags?: string[];
  synopsis?: string;
  price?: string;
  format?: string;
}

export interface User {
  name: string;
  avatarUrl: string;
  status: 'online' | 'offline';
}
