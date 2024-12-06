import { IBooksResponse } from "@/types/fetchbook";
import axios from "axios";

export const fetchBooks = async (): Promise<IBooksResponse | undefined> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/book`);

        if (response.status === 200 && response.data) {
            const { data, limit, page, totalBooks, totalPages } = response.data;
            const status = response.status;

            return {
                books: data,
                limit,
                page,
                totalBooks,
                totalPages,
                status,
            };
        } else {
            console.error("Unexpected response format or status:", response);
            return undefined;
        }
    } catch (error: any) {
        console.error("Failed to fetch books:", error.message || error);
        return undefined;
    }
};
