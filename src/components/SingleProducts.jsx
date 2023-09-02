import React from 'react'
import '../css/Product.css'
import Rating from './Rating'
import { BsCartCheck, BsCartDash } from 'react-icons/bs'
import { CartState } from '../context/Context'
import toast from 'react-hot-toast'

const SingleProducts = ({ prod }) => {

    const { id, name, price, image, rating } = prod
    const { productState: { cart }, productDispatch } = CartState()

    return (
        <div className='content'>
            <img src={image} />
            <div className='descript'>
                <p>{name}</p>
                <p>Rs.{price}/-</p>
                <Rating rating={rating} onRate={() => { }} />

                {
                    cart.some(p => p.id === id) ?
                        <div className='btn remove' onClick={() => {
                            toast.error('Item Removed from Cart!')
                            productDispatch({ type: 'REMOVE_FROM_CART', payload: prod })
                        }}><BsCartDash size='30' color='' /></div> :
                        <span>
                            <div className='btn add' onClick={() => {
                            toast.success('Item Added To Cart!')
                                productDispatch({ type: 'ADD_TO_CART', payload: prod })
                            }}><BsCartCheck size='30' color='' /></div>
                        </span>

                }

            </div>
        </div>
    )
}

export default SingleProducts