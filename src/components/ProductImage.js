
import React, { useRef, useState, useEffect } from 'react'
import { MdCancel } from 'react-icons/md';

const ProductImage = () => {
    const fileInputRef = useRef(null);
    const [files, setFiles] = useState([]);

    const handleAddImage = () => {
        fileInputRef.current.value = null; 
        fileInputRef.current.click();
    }
    const deleteImage = (index) => {
        const filteredImages = files.filter((imageFile, id) => index !== id)
        setFiles(filteredImages)
    }
    const handleFileChange = (event) => {
        
        const selectedFiles = event.target.files;
        const urls = Array.from(selectedFiles).map(file => URL.createObjectURL(file));
        // setImageURLs(urls);
        console.log(`New Length of File ${urls.length}`)
        setFiles([...files, urls]);
    }

    const Images = ({src, index}) => (
        <div className='pre-product-image-container'>
            <button type='button' onClick={() => deleteImage(index)}><MdCancel size={25}/></button>
            <img className='pre-product-image' src={src}/>
        </div>
    )
    

  return (
    <div>
      <div className='wrap flex'>
        {files.map((file, id) => <Images key={id} index={id} src={file}/>)}    
      </div>
      <input className='file-input'
        type='file' 
        ref={fileInputRef} 
        // style={{visibility: 'hidden'}}
        onChange={handleFileChange}
        accept='image/*'
        multiple
      /> 
      <button type='button' onClick={handleAddImage}>Add New Image</button>
    </div>
  )
}

export default ProductImage
