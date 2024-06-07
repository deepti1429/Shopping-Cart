import React from 'react'
import './Subtotal.css';
import { useSelector } from 'react-redux';
import { getTotal } from '../Redux/cartReducer';
function Subtotal() {
    const cart=useSelector(state=>state.cart)
  return (
    <div className='subtotal'>
        <div className='subtotal_area'>
            <p>Subtotal({cart.cart.length} items):${getTotal(cart.cart)}</p>
            <button>proceed to checkout</button>
            
            </div> 
      
    </div>
  )
}

export default Subtotal
