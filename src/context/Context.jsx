import React, { createContext, useContext, useReducer } from 'react'
import {productReducer, filterReducer} from './Reducer'
import axios from 'axios'

const Cart = createContext()

const {data} = await axios.get('http://localhost:5000/products')

const Context = ({ children }) => {

  const [productState, productDispatch] = useReducer(productReducer, { product: data, cart: [] })
  const [filterState, filterDispatch] = useReducer(filterReducer, { sort: "", byRating: 0, bySearchQuery: "" })

  console.log(filterState)
  return <Cart.Provider value={{ productState, productDispatch, filterState, filterDispatch }}>{children}</Cart.Provider>
}

const CartState = () => useContext(Cart)

export {Context, CartState}
