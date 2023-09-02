import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import {CartState} from '../context/Context'

const Navbar = () => {

  const { filterState: {bySearchQuery}, filterDispatch} = CartState()
  

  return (
    <div className='navbar'>
      <h1>Shoppy</h1>
      <input type="text" placeholder='Search Product' value={bySearchQuery} onChange={(event) => {filterDispatch({type: 'SEARCH_FILTER', payload: event.target.value})}} />
      <div className='cart-link'><Link to='/cart'>Cart</Link></div>
    </div>
  )
}

export default Navbar