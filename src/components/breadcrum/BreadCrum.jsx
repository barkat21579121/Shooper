import React from 'react'
import '../breadcrum/breadCrum.css'
import Arrow from "../Assets/breadcrum_arrow.png"

const BreadCrum = ({product}) => {
  // debugger
    // const {product} = product
    // console.log( "product",product)
  return (

    <div className='bread-crum'>
 Home <img src={Arrow}/>shop <img src={ Arrow}/> { product.category} <img src={ Arrow}/> {product.name}

    </div>  
  )
}

export default BreadCrum