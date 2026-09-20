import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const BookCard = ({ book }) => {

    const { id, title, price, descriptino, image, category, author } = book;

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={280}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{author}</div>
                </h2>
                <p>{descriptino}</p>
                <p>${price}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">Books</div>
                </div>
                <div className='flex justify-center items-center m-4'>
                    <Link href={`/books/${id}`}>
                        <button className="btn btn-xs bg-green-400 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BookCard