import React from 'react'
import '../items/items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className='items'>
       <Link to={`/product/${props.id}`}> <img src={props.image }/></Link>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-prices-new'>${props.new_price}</div>
            <div className='item-prices-old'>${props.old_price}</div>

        </div>
    </div>
  )
}

export default Items