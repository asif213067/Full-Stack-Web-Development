import React from 'react'
import Image from 'next/image'

const FoodCard = ({ food }) => {

    const { dish_name, image_link, origin_and_popularity } = food;

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <Image
                    width={300}
                    height={250}
                    src={image_link}
                    alt={dish_name}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {dish_name}
                </h2>
                <p>{origin_and_popularity}</p>
            </div>
        </div>
    )
}

export default FoodCard