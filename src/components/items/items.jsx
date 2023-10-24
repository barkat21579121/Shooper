import React from 'react'
import '../items/items.css'

const Items = (props) => {
  return (
    <div className='items'>
        <img src={props.image }/>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-prices-new'>${props.new_price}</div>
            <div className='item-prices-old'>${props.old_price}</div>

        </div>
    </div>
  )
}

export default Items