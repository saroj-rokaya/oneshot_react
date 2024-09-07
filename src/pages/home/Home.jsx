import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar.jsx'
import Card from './Card.jsx'
import Footer from '../../components/navbar/Footer.jsx'
import axios from 'axios'

const Home = () => {
  const [products, setProducts] = useState([])
  const fetchProduct = async () => {
    const response = await axios.get('https://66dc84a947d749b72acbc6f7.mockapi.io/products')
    if (response.status === 200) {
      setProducts(response.data)
    }
  }
  useEffect(() => {
    fetchProduct()
  }, [])
  console.log(products)

  return (
    <>
      <Navbar />
      <div className=" bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {
              products.map((product)=>{
                return (
                  <Card product={product} />
                )
              })
            }

          </div>
        </div>
      </div>
      <Footer />

    </>
  )
}

export default Home
