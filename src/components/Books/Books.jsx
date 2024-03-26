import { useEffect, useState } from "react";
import Book from "./Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (
        <div>
            <div className="container mx-auto lg:px-20 px-5 py-5 text-center">
                <h3 className="text-neutral-900 text-4xl font-bold font-['Playfair Display']">Books </h3>
            </div>

            <div className="container mx-auto lg:px-20 px-5 py-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {
                        books.map(book => <Book key={book.id} book={book}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;