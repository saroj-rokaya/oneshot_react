import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar.jsx'
import Footer from '../../components/navbar/Footer.jsx'
import Form from '../../components/Form.jsx'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const fetchProduct = async () => {
    const response = await axios.get('https://66dc84a947d749b72acbc6f7.mockapi.io/products/' + id)
    if (response.status === 200) {
      setProduct(response.data);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, [])
  return (
    <>
      <Navbar />
      <Form type="Edit Product" product={product} />

      <Footer />
    </>
  )
}

export default Edit
