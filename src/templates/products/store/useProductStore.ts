import { create } from 'zustand';
interface UseProductStore {
  products: Product[]
}

interface Product {
  id: number
  barCode: string
  qrCode: string
  name: string
  stock: number
  sizes: string[]
  colors: string[]
}

export const useProductStore = create<UseProductStore>((set, get) => ({
  products: []
}))