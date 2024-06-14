import React from 'react'
import { MdCheckBox } from 'react-icons/md'
import { category } from '../app/utilities'
import ProductImage from '../components/ProductImage'

const AddProduct = () => {
  return (
    <form className='add-product-form'>
      <div className='flex-2'>
        <div>
          <h2>General Informations</h2>
          <div>
            <label htmlFor='product-name'>Product Name</label>
            <input type='text' id='product-name' placeholder='Orange Juice'/>
          </div>
          <div>
            <label htmlFor='product-description'>Product Description</label>
            <textarea id='product-description' placeholder='Enter Description'></textarea>
          </div>
        </div>
        <div>
          <h2>Pricing</h2>
          <div>
            <label htmlFor='product-price'>Product Base Price</label>
            <input type='number' id='product-price' placeholder='₦ 500'/>
          </div>
          <div className='flex'>
            <div>
              <label htmlFor='product-description'>Discount Percentage</label>
              <input type='number' id='product-description' placeholder='50%' />
            </div>
            <div>
              <label htmlFor='discount-type'>Discount Type</label>
              <select id='discount-type' name='options'> Discount
                <option value='Price slash'>Select Discount Type</option>
                <option value='Price slash'>Price Slash</option>
                <option value='Price percent'>Price Percentage</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2>Product Media</h2>
          <div>
            <ProductImage />
          </div>
        </div>
        <div>
          <h2>Category</h2>
          <p>Product Category</p>
          <select>
            <option>Select Category</option>
            {category.map((c, id) => <option key={id}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <h2>Product Tags</h2>
          <input type='checkbox' name='Phone' value={"Rice"}/>
        </div>
      </div>
    </form>
  )
}

export default AddProduct
