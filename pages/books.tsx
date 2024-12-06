import BookList from "@/components/BookList";
import Loader from "@/components/Loader";

import { fetchBooks } from "@/services/fetch-books";
import { IBooksResponse } from "@/types/fetchbook";
import { FC, use, useEffect, useState } from "react";

interface BooksProps {
    books: IBooksResponse | undefined;
}

const Books: FC<BooksProps> = ({ books }) => {
    if (!books) {
        return <Loader message="fetching books" />;
    }
    return <BookList books={books} />;
};
export default Books;

export const getServerSideProps = async () => {
    const books = await fetchBooks();
    return {
        props: {
            books,
        },
    };
};
