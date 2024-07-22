import React, { useState } from 'react'
import imagePane from '../img/pad.png'
import {  FaEye } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import WishList from '../pages/WishList';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const ProductItem = ({product}) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname)
  const navigate = useNavigate()
  if(product.image_url) console.log('Logging out product from product Item page')
  const showProduct = (id) => {
    navigate(`/product/${id}`)
  }
  return (
    <div className='product-details' onClick={() => showProduct(product.id)}>
      <div className='product-image'>
        <div className='product-icon-container'>
          {!currentPath.endsWith("wishlist") && <><FaHeart /><FaEye /></>}
          {currentPath.endsWith("wishlist") && <button><MdDelete /></button>}
        </div>
        <img alt={`clean ${product.name}`} src={product.image_urls.length > 0 ? product.image_urls[0] : imagePane}></img>
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
