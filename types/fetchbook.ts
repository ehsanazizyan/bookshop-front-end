export interface IBook {
    id: number;
    author: string;
    price: number;
    quantity: number;
    title: string;
    summary: string;
}

export interface IBooksResponse {
    books: IBook[];
    limit: number;
    page: number;
    totalBooks: number;
    totalPages: number;
    status: number;
}
