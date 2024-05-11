import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddProduct from './AddProduct'

const Product = () => {

  const ProductList = () => (<div>
                    <p>Product Page</p>
                  </div>)
  
  return (
    <Routes>
      <Route path='/' element={<ProductList />} />
      <Route path='/add' element={<AddProduct />} />
    </Routes>
  )
}

export default Product
