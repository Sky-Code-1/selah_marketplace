import React from 'react'
import imagePane from '../img/imagepane.jpg'
import {  FaEye } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';


const ProductItem = ({product}) => {
  return (
    <div className='product-details'>
      <div className='product-image'>
        <div className='product-icon-container'>
          <FaHeart />
          <FaEye />
        </div>
        <img alt={`clean ${product.name}`} src={imagePane}></img>
      </div>
      <div>
        <p className='bold-text'>{product.name}</p>
        <p className='price-text'>${product.price}</p>
        <p>({product.ratings}/10)</p>
      </div>
    </div>
  )
}

export default ProductItem
