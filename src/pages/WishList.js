import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../components/ProductItem'
import Tag from '../components/Tag'

const WishList = () => {
    const products = useSelector(state => state.products)
  return (
    <div className='product-list'>
        <Tag status="My List" category="Saved Items (5)"/>
        <div className='trending-product-list'>
            {products.map(product => (
            <ProductItem product={product}/>
            ))}
        </div>
    </div>
  )
}

export default WishList
