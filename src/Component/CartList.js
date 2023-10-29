import React, { useEffect, useState } from 'react'

function CartList({cart}) {
  const[CART, setCART] = useState([])
  useEffect(() =>{
        setCART(cart)
  } , [CART]
  )
  return (
    <div>
        {
            CART.map((cartItem, cartIndex) =>
            {
                return(
                    <div>
                        <img src={cartItem.url}  alt='no iamge' width="40" />
                        <span> {cartItem.name}</span>
                        <button>- </button>
                        <span>{cartItem.quantity}</span>
                        <button>+ </button>
                        <span>Rs. {cartItem.price}</span>
                        </div>
                )
            })
        }
        <p>
          Total <span></span>
        {
          cart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)

        }
        </p>
    </div>
  )
}

export default CartList