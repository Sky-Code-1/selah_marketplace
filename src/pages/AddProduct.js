import React, {useState} from 'react'
import { category } from '../app/utilities'
import ProductImage from '../components/ProductImage'
import { MdCancel } from 'react-icons/md'
import { addProduct } from '../features/products/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [tag, setTag] = useState()
  const [tags, setTags] = useState([])
  const [files, setFiles] = useState([]);
  const [product, setProduct] = useState({
    name: 'Fresh Mango Fruits',
    price: 250,
    ratings: 9.7,
    description: 'Juicy Delicious and Satisfactory',
    image: [],
    category: 'Confectionaries',
    tags
  })
  const addTag = () => {
    setTags([...tags, tag])
    setTag('')
  }
  const products = useSelector(state => state.products)
  const newProduct = {
      name: 'Fresh Mango Fruits',
      price: 250,
      ratings: 9.7,
      description: 'Juicy Delicious and Satisfactory',
      image: [],
      category: 'Confectionaries'
    }
  function addNewProduct() {
    setProduct(prev => ({...prev, tags: tags}))
    console.log('Adding A new Product')
    console.log(JSON.stringify(product))
    dispatch(addProduct(product))
    navigate('/')
  }
  const handleInputChange = (e) => setProduct(prev => ({...prev, [e.target.name] : e.target.value})) 
  //Todo handle key click for enter keys
  const handleKeyClick = (event) => {
    
  }
  const deleteTag = (index) => {
      const filteredTags = tags.filter((tag, id) => index !== id)
      setTags(filteredTags)
  }

  return (
    <form className='add-product-form'>
      <div className='flex-2'>
        <div>
          <h2>General Informations</h2>
          <div>
            <label htmlFor='product-name'>Product Name</label>
            <input name='name' value={product.name} onChange={handleInputChange} type='text' id='product-name' placeholder='Orange Juice'/>
          </div>
          <div>
            <label htmlFor='product-description'>Product Description</label>
            <textarea name='description' value={product.description} onChange={handleInputChange} id='product-description' placeholder='Enter Description'></textarea>
          </div>
        </div>
        <div>
          <h2>Pricing</h2>
          <div>
            <label htmlFor='product-price'>Product Base Price</label>
            <input name='price' value={product.price} onChange={handleInputChange} type='number' id='product-price' placeholder='₦ 500'/>
          </div>
          <div className='flex'>
            <div>
              <label htmlFor='product-discount'>Discount Percentage</label>
              <input type='number' id='product-discount' placeholder='50%' />
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
            <ProductImage files={files} setFiles={setFiles}/>
          </div>
        </div>
        <div>
          <h2>Category</h2>
          <p>Product Category</p>
          <select value={product.category} onChange={handleInputChange} name='category'>
            <option>Select Category</option>
            {category.map((c, id) => <option key={id}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <h2>Product Tags</h2>
          {<div className='flex wrap'>{
            tags.map((tag, id) => <div className=' pre-product-tag-container'>
              <div>
                <p className='product-tag'>{tag}</p>
              </div>
              <button type='button' onClick={() => deleteTag(id)}><MdCancel size={20}/></button>
            </div>)}
          </div>}
          <label htmlFor='product-tag'>Enter Tag</label>
          <input 
            type='text' 
            id='product-tag' 
            placeholder='Parfait, 
            Wigs, 
            Roll-On...' 
            name='tag' 
            value={tag} 
            // Todo include handle key click function
            // onKeyDown={handleKeyClick}
            onChange={(e) => setTag(e.target.value)}
          />
          <button type='button' disabled={!tag} onClick={addTag}>Add Tag</button>
        </div>
        <button type='button' onClick={() => addNewProduct(newProduct)}>Add Product</button>
      </div>
    </form>
  )
}

export default AddProduct
