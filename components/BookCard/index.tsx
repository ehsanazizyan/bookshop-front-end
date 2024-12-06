import { IBook } from "@/types/fetchbook";
import { FC, useState } from "react";
import ActionCart from "../ActionCart";
import Link from "next/link";

interface BookCardProps {
    book: IBook;
}

const BookCard: FC<BookCardProps> = ({ book }) => {
    return (
        <div className="shadow-lg rounded-md border border-gray-300 p-4 w-full md:w-72">
            <div className="flex flex-col md:flex-row items-center justify-between ">
                <Link href={`/bookId${book.id}`}>
                    <img src="./roman.jpg" alt={book.title} className="w-full md:w-48" />
                </Link>
            </div>
            <div className="flex flex-col gap-2 mt-4 font-semibold">
                <h2 className="text-center text-2xl">{book.title}</h2>
                <div className="flex items-center justify-between">
                    <div className="gap-4 flex flex-col">
                        <p>Author: {book.author}</p>
                        <span>Price: ${book.price} </span>
                    </div>

                    <ActionCart book={book} />
                </div>
            </div>
        </div>
    );
};

export default BookCard;
