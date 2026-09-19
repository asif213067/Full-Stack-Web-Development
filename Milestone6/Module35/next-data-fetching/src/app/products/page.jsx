import React from 'react'
import ProductCard from '../components/ProductCard';

const getProducts = async () => {
    try {
        const res = await fetch("http://localhost:4000/products");
        return res.json();
    } catch (error) {
        throw new Error("Failed to fetch Products data!");
    }
}

const ProductPage = async () => {

    const products = await getProducts();

    return (
        <div>
            <h2 className='text-3xl text-green-400'>Productpage : {products.length}</h2>
            <div className='grid grid-cols-3 gap-4'>

                {
                    products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>

    )
}

export default ProductPage