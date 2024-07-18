import React from 'react'
import { useSelector } from 'react-redux'
import Tag from '../components/Tag'
import ProductItem from '../components/ProductItem'

const Cart = () => {
    const products = useSelector(state => state.products)
  return (
    <div className='product-list'>
        <Tag status='Cart' category='Items (5)'/>
        <div className='trending-product-list'>
            {products.map(product => (
            <ProductItem product={product}/>
            ))}
        </div>
    </div>
  )
}

export default Cart
