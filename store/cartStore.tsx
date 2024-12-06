import { IBook } from "@/types/fetchbook";
import { calculateTotalItems, calculateTotalPrice } from "@/utils/cartCalculations";
import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface CartState {
    selectedItems: IBook[];
    totalPrice: number;
    totalItems: number;
    addItem: (book: IBook) => void;
    removeItem: (book: IBook) => void;
    increment: (book: IBook) => void;
    decrement: (book: IBook) => void;
    checkout: () => void;
}
type CartPersist = PersistOptions<CartState>;

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            selectedItems: [],
            totalPrice: 0,
            totalItems: 0,
            addItem: (book) =>
                set((state) => ({
                    selectedItems: [...state.selectedItems, { ...book, quantity: 1 }],
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + book.price,
                })),
            removeItem: (book) =>
                set((state) => ({
                    selectedItems: state.selectedItems.filter((item) => item.id !== book.id),
                    totalItems: state.totalItems - 1,
                    totalPrice: state.totalPrice - book.price,
                })),
            increment: (book) =>
                set((state) => {
                    const newSelectedItems = state.selectedItems.map((item) =>
                        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                    );

                    return {
                        selectedItems: newSelectedItems,
                        totalItems: calculateTotalItems(newSelectedItems),
                        totalPrice: calculateTotalPrice(newSelectedItems),
                    };
                }),
            decrement: (book) =>
                set((state) => {
                    const newSelectedItems = state.selectedItems.map((item) =>
                        item.id === book.id ? { ...item, quantity: item.quantity - 1 } : item
                    );

                    return {
                        selectedItems: newSelectedItems,
                        totalItems: calculateTotalItems(newSelectedItems),
                        totalPrice: calculateTotalPrice(newSelectedItems),
                    };
                }),
            checkout: () =>
                set(() => ({
                    selectedItems: [],
                    totalItems: 0,
                    totalPrice: 0,
                })),
        }),
        {
            name: "cart-storage",
        } as CartPersist
    )
);
