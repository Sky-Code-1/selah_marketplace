import React from 'react'

const Image = ({ src }) => {
  return (
    <div className='image-container'>
      <img src={src}></img>
    </div>
  )
}

export default Image
