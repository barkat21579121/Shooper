import React from 'react'
import exclusive_img from "../Assets/exclusive_image.png"
import '../Offer/offers.css'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exculsive</h1>
            <h1>Offers For You</h1>
            <p>Only On Best Seller Products</p>
            <button>check now</button>
        </div>
        <div className='offers-right'>
        <img src={exclusive_img }/>

        </div>
    </div>
  )
}

export default Offers