import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ product }) => {
    return (
        <>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <img src={product.productImage}
                    alt="Headless UI" className="w-full h-64 object-cover" />
                <div className="p-4 md:p-6">
                    <h3 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300 mb-2">{product.productName}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">
                        {product.productDescription}
                    </p>
                    <Link to={`/product/${product.id}`}
                        className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full">Learn
                        More
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Card
