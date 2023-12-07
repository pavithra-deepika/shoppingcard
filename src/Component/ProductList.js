import React, { useState } from 'react'
import '../App.css'

function ProductList({product, addToCart}) {
    const [disable, setDisable] = useState(false)

    console.log("ooo", product)
    
  return (
    <div >
    <div className='product-item'>
    <img src={product.url}  alt='no iamge' width="80%" height={200} />
    <p>{product.name} | {product.category} </p>
    <p> {product.seller} </p>
    <p> Rs. {product.price} /-</p>
    <button disabled={disable}
        onClick={() => {setDisable(true); addToCart(product)}}
    >Add To Cart</button>
</div>
      </div>
     
  )
}

export default ProductList