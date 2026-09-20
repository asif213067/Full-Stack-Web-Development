import React from 'react'
import BookCard from '../components/BookCard';


const getBooks = async() => {
    const res = await fetch('http://localhost:4000/books', {next: {revalidate: 20}});

    if(!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

const BookPage = async() => {

    const books = await getBooks();

    return (
        <div>
            <h2 className='text-3xl text-green-400'>Books : {books.length}</h2>
            <div className='grid grid-cols-3 gap-4'>

                {
                    books.map(book => <BookCard key={book.id} book={book} />)
                }
            </div>
        </div>
    )
}

export default BookPage