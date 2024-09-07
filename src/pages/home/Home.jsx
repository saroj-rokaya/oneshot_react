import React from 'react'
import Navbar from '../../components/navbar/Navbar.jsx'
import Card from './Card.jsx'
import Footer from '../../components/navbar/Footer.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Footer />

    </>
  )
}

export default Home
