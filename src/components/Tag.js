import React from 'react'

const Tag = ({status, category}) => {
  return (
    <>
        <div className='desc-div'>
            <div className='box-div'></div>
            <p>{status}</p>
        </div>
        <h2>{category}</h2>
    </>
  )
}

export default Tag
