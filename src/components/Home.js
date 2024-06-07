import React from 'react'
import Product from './Product'
import Image1 from '../Images/Image1.jpg'
import Image2 from '../Images/Image2.webp'
import Image3 from '../Images/Image3.webp'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div>
       <Product
       id="1"
       title="kids dress"
       price="450"
       rating="⭐⭐⭐"
       image={Image1}

       />
       <Product
       id="2"
       title="kids dress"
       price="550"
       rating="⭐⭐⭐"
       image={Image2}
       />

      </div>
      <div>
        <Product 
        id="3"
        title="men t-shirt"
        price="950"
        rating="⭐⭐⭐"
        image={Image3}
        />
      </div>
    </div>
  )
}

export default Home
