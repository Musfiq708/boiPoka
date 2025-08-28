import { useEffect, useState } from "react"
import Book from "../Book/Book"

export default function Books() {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className=''>
            <h3 className='text-center font-semibold text-4xl'>Books</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    )
}
