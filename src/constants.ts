export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Popular' | 'Main Course' | 'Desserts' | 'Beverages';
  image: string;
  isPopular?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Chicken Ramen',
    description: 'Rich broth with tender chicken, soft-boiled egg, and fresh noodles.',
    price: '৳450',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1557872245-741f4c666e5c?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: '2',
    name: 'American Platter',
    description: 'Classic breakfast with eggs, sausages, hash browns, and toast.',
    price: '৳550',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: '3',
    name: 'Cappuccino',
    description: 'Perfectly balanced espresso with steamed milk and silky foam.',
    price: '৳220',
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: '4',
    name: 'Chicken Cheeseballs',
    description: 'Crispy golden balls filled with succulent chicken and melting cheese.',
    price: '৳320',
    category: 'Popular',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: '5',
    name: 'Chilli Chicken Dumplings',
    description: 'Steamed dumplings tossed in a spicy and tangy chilli sauce.',
    price: '৳380',
    category: 'Popular',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Dori Fish Platter',
    description: 'Grilled Dori fish served with buttered vegetables and mash.',
    price: '৳650',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '7',
    name: 'Red Velvet Cheesecake',
    description: 'Creamy cheesecake with a rich red velvet base and cocoa hints.',
    price: '৳350',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '8',
    name: '3-Layer Dark Chocolate Delight',
    description: 'Decadent layers of dark chocolate mousse and ganache.',
    price: '৳380',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: '9',
    name: 'Beef Lasagna with Fries',
    description: 'Hearty layers of beef, pasta, and cheese served with crispy fries.',
    price: '৳480',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  }
];

export const REVIEWS = [
  {
    id: '1',
    name: 'Sarah Ahmed',
    text: 'Absolutely loved the momos and tacos — full of flavor!',
    rating: 5
  },
  {
    id: '2',
    name: 'Tanvir Hossain',
    text: 'The lasagna is a must-try — amazing for the price.',
    rating: 4
  },
  {
    id: '3',
    name: 'Maliha Khan',
    text: 'Great place for hanging out with friends. The ambiance is so cozy!',
    rating: 5
  }
];

export const GALLERY = [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550966842-2849a2220822?q=80&w=800&auto=format&fit=crop'
];
