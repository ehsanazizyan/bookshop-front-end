import { IBooksResponse } from "@/types/fetchbook";
import { FC } from "react";
import BookCard from "../BookCard";

interface BooksProps {
    books: IBooksResponse | undefined;
}

const BookList: FC<BooksProps> = ({ books }) => {
    return (
        <div className="flex flex-wrap gap-6 items-center justify-center">
            {books?.books?.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
};

export default BookList;
