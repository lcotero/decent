
export interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface MenuItem {
  title: string;
  description: string;
  price: string;
  image: string;
  category: 'brunch' | 'coffee' | 'sweet';
}
