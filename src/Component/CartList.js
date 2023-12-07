import React, { useEffect, useState } from 'react'
import './style.css'

function CartList({ cart }) {

  const [CART, setCART] = useState([])

  useEffect(() => {
      setCART(cart)
  }, [cart])
  
  return (
      <div  > 
        <div className='list'>
          {
              CART.map((cartItem, cartindex) => {
                  return (
                      <div className='product'  >
                        <img  className='image' src={cartItem.url}  alt='no iamge' width="50" />
                          <span className='productName'> {cartItem.name} </span>
                          <button
                              onClick={() => {
                                  const _CART = CART.map((item, index) => {
                                      return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                                >-</button>
                          <span> {cartItem.quantity} </span>
                          <button
                              onClick={() => {
                                  const qty = CART.map((item, index) => {
                                      return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(qty)
                                }}
                                >+ </button>
                                <span> Rs.{cartItem.price} </span>
                          <span> Rs.{cartItem.price * cartItem.quantity} </span>
                      </div>
                  )
                })
            }

            </div>
          <p className='total'> Total: <span></span>
              {
                  CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
              }
          </p>
      </div >
  )
}

export default CartList
