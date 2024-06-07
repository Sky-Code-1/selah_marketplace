import React, { useState } from 'react'
import imagePane from '../img/pad.png'
import {  FaEye } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import WishList from '../pages/WishList';


const ProductItem = ({product}) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname)

  return (
    <div className='product-details'>
      <div className='product-image'>
        <div className='product-icon-container'>
          {!currentPath.endsWith("wishlist") && <><FaHeart /><FaEye /></>}
          {currentPath.endsWith("wishlist") && <button><MdDelete /></button>}
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
