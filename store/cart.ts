import { create } from 'zustand';

export interface CartItem {
  id: string; // Unique instance ID
  productId: string;
  title: string;
  price: number;
  image: string;
  variant?: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  toggleCart: () => void;
  clearCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  addItem: (item) => set((state) => ({ 
    items: [...state.items, { ...item, id: Math.random().toString(36).substr(2, 9) }],
    isOpen: true // Auto open cart on add
  })),
  removeItem: (id) => set((state) => ({ 
    items: state.items.filter((i) => i.id !== id) 
  })),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  clearCart: () => set({ items: [] }),
  total: () => get().items.reduce((sum, item) => sum + item.price, 0),
}));
