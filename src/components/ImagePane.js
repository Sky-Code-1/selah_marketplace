import React from 'react'
import { Link } from 'react-router-dom'
import imagePane from '../img/imagepane.jpg'

const ImagePane = () => {
  return (
    <div className='imagepane-container'>
        <div className='imagepane'>
            <div className='imagepane-text'>
                <p>Buy any product today</p>
                <h1>Get Up to 10% Discount</h1>
                <p>Shop Now<Link>{'->'}</Link></p>
            </div>
            <div>
                <img src={imagePane}>
                </img>
            </div>
        </div>
    </div>
  )
}

export default ImagePane
