import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";
import { ProductType } from "@/types/product";

interface CartStore {
  items: ProductType[];
  addItem: (data: ProductType) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],

      addItem: (data: ProductType) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          toast("El producto ya existe en el carrito");
          return;
        }

        set({ items: [...currentItems, data] });

        toast("Producto añadido al carrito 🛍️");
      },

      removeItem: (id: number) => {
        set({
          items: get().items.filter((item) => item.id !== id), 
        });

        toast("Producto eliminado del carrito 🚮");
      },

      removeAll: () => {
        set({ items: [] });
        toast("Carrito vaciado 🧹");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
