import React from 'react'
import '../Hero/Hero.css'
import hand_icon from "../Assets/hand_icon.png"
import arrow from "../Assets/arrow.png"
import hero from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className='hero'>
<div className='hero-left'>
    <h2>new arrivals only</h2>
    <div>
        <div className='hero-hand-icon'>
            <p>new</p>
        <img src={hand_icon}/>
        </div>
        <p>Collections</p>
        <p>for everyOne</p>
    </div>
    <div className='hero-latest-btn'>
        <div>latest collection</div>
        <img src={arrow}/>
    </div>

</div>
<div className='hero-right'></div>
 <img src={hero}/>

    </div>
  )
}

export default Hero