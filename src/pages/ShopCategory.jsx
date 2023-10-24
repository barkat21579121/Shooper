import React, { useContext } from 'react'
import './Css/shopcategory.css'
import { ShopContext } from '../context/ShopContext';
import drop_down from "../components/Assets/dropdown_icon.png"
import Items from '../components/items/items';

const ShopCategory = (props) => {
  const {all_product}= useContext(ShopContext);
  return (
    <div className='shopCategory'>
    <img src={props.banner}  className='shop-categoryBanners'/>
    <div className='shop-category-index'>
      <p><span>Showing 1-12</span> Out of 36 Products</p>
    </div>
    <div className='shop-category-sort'>
      Sort by <img src={drop_down}/>
    </div>
    <div className='img'>
    <div className='all-product'>
      { all_product &&  all_product.map((item,i)=>{
        if(props.category === item.category){
return <Items  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }else{
          return null
        }
      })}
    </div></div>

    </div>
  )
}

export default ShopCategory