import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    // load books data 
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])


    return (
        <div className="container mx-auto ">
            <h1 className="text-4xl font-bold mt-24 text-center">Books</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;