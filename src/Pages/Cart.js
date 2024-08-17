import React from 'react'
import { useEffect } from 'react'

const Cart = () => {
  useEffect(() => {
    document.title = "Cooked_Cart"
  }, [])
  return (
    <div>
      <h3 className="text-center mt-5 fw-bold mb-5">CART-PAGE</h3>
    </div>
  )
}

export default Cart
