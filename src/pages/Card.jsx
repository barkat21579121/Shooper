import React, { useState } from 'react'
import CartItem from '../components/CartItem/CartItem'
import { useNavigate } from 'react-router';

const Card = () => {
  // const Navigate =useNavigate()
  const [user ,setUser]=useState([]);
  const data = localStorage.getItem("user_logedIn");
  const arr = JSON.parse(data)
  setUser(arr)
  return (
    <>
    { user.length === 0 ? document.write("logIn_____First"):
    <div>
    <CartItem/>
    </div>
  }</>
  )
}

export default Card