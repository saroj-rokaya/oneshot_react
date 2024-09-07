import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <img src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
                    alt="Headless UI" className="w-full h-64 object-cover" />
                <div className="p-4 md:p-6">
                    <h3 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300 mb-2">Product</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">
                        Completely unstyled, fully accessible UI components,
                        designed to integrate beautifully with Tailwind CSS.
                    </p>
                    <Link to="/product"
                        className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full">Learn
                        More
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Card
