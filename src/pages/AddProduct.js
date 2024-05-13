import React, { useState } from 'react'
import { createNewProduct } from '../features/product/productSlice'
import { UseDispatch, useDispatch } from 'react-redux'
import myImage from '../img/testing_img.jpg'

const AddProduct = () => {
  const dispatch = useDispatch()
  const [product, setProduct] = useState({
    name: '', 
    price: ''
  })

  const [image, setImage] = useState([myImage])

  const onInputChange = (e) => {
    setProduct({...product, [e.target.name]: e.target.value})
  }

  const saveProduct = () => {
    const newProduct = {...product, date: new Date().toISOString()}
    const stringifiedProduct = JSON.stringify(newProduct)
    const contentType = 'Content-Type'
    const axiosRequestConfig = {
      headers: {
        [contentType]: 'multipart/form-data'
      }
    };
    var formData = new FormData()
    formData.append('product', stringifiedProduct)
    console.log(`Length of Image ${image.length}`)
    if (image) {
      for (let i = 0; i < image.length; i++) {
        formData.append('image', image[i]);
        console.log(image[i].name)
      }
    }
    dispatch(createNewProduct(formData, axiosRequestConfig))
    setImage('')
    setProduct({...product, name: '', price: ''})
  }
  
  const onFileInputChange = (e) => {
    setImage(e.target.files); // Set the selected file(s) directly
  };

  return (
    <div>
      <p>Add Product Page</p>
      <h2>Fill The form below to add a new product</h2>
      <form>
        <input 
          type='text'
          name='name'
          placeholder='Enter Name Of Product'
          value={product.name}
          onChange={onInputChange}
        />
        <input 
          type='number'
          name='price'
          placeholder='Enter Price Of Product'
          value={product.price}
          onChange={onInputChange}
        />
        <div>
          <label htmlFor='fileInput'> + <br/>
            <p>Upload File</p>
          </label>
          <input 
            type='file'
            name='image'
            id='fileInput'
            placeholder='upload image' 
            className='file-input'
            multiple
            onChange={onFileInputChange}
          />
        </div>
        <button onClick={() => saveProduct()} type='button'>Save Product</button>
      </form>
    </div>
  )
}

export default AddProduct
