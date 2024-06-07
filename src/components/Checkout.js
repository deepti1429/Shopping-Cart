import React from 'react'
import { useSelector } from 'react-redux'
import './Checkout.css';
import Subtotal from './Subtotal'
import { useDispatch } from 'react-redux';
import { removefromcart } from '../Redux/cartAction';


function Checkout() {
  const dispactch=useDispatch();
    const cart=useSelector(state=>state.cart);
    
  return (
    <div className='checkout'>
        <div className='checkout_items'>
           {cart.cart.map(item=>{
            return(
                <div className='checkout_product'>
                    <img src={item.image}></img>
                    <div className='product_info'>
                        <h4>{item.title}</h4>
                        <p>{item.rating}</p>
                        <p>{item.price}</p>
                        <button onClick={()=>dispactch(removefromcart(item.id))}>remove from cart</button>
                    </div>

                </div>
            )
           })}

        </div>
      <div className='subtotal'>
       <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
