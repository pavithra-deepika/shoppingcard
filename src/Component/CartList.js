import React from 'react'

function CartList({cart}) {
  return (
    <div>
        {
            cart.map((cartItem, cartIndex) =>
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
    </div>
  )
}

export default CartList