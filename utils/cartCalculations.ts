import { IBook } from "@/types/fetchbook";

export const calculateTotalPrice = (selectedItems: IBook[]) =>
    selectedItems.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);

export const calculateTotalItems = (selectedItems: IBook[]) =>
    selectedItems.reduce((acc, cur) => acc + cur.quantity, 0);
