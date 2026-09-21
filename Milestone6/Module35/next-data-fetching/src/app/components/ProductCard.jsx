'use client'
import React from 'react'
import Image from 'next/image'
import useUser from '../hooks/useUser';

const ProductCard = ({ product }) => {

    const { title, price, descriptino, image, category } = product;

    const user = useUser();  // apply context API with help of custom hook

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
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{descriptino}</p>
                <p>${price}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">Products</div>
                </div>
                <h2>{user}</h2>
            </div>
        </div>
    )
}

export default ProductCard