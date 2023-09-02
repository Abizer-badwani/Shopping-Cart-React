import { CartState } from '../context/Context'
import Rating from '../components/Rating'
import { BsCartDash } from 'react-icons/bs'
import toast from 'react-hot-toast'

import '../css/Cart.css'
import Summary from '../components/Summary'

const Cart = () => {
  const { productState: { cart }, productDispatch } = CartState()

  return <>
    {
      cart.length ?
        <div className='cart-container'>
          <div className="cart-header">cart</div>
          <div className="inner-cart-container">
            <div className="cart-items">
              {
                cart?.map((product) => {
                  console.log(product)
                  return <div className="cart-item" key={product.id}>
                    <div className="details">
                      <div className='descriptives'>
                        <span>{product.name}</span>
                        <span>Rs.{product.price}/-</span>
                        <div className='rate'><Rating rating={product.rating} onRate={() => { }} /></div>
                      </div>

                      <div className="quantity-box">
                        <select name="quantity" id="quantity" value={product.qty} onChange={
                          (e) => {
                            toast.success('Quantity Updated!')
                            productDispatch({ type: "CHANGE_QTY", payload: { id: product.id, qty: e.target.value } })
                          }} >
                          {
                            [...Array(10)].map((_, index) => {
                              return <option className='options' key={index} >{index + 1}</option>
                            })
                          }
                        </select>
                      </div>
                    </div>
                    <div className='cart-remove-item-btn' onClick={() => {
                      toast.error('Item Removed From Cart!')
                      productDispatch({ type: 'REMOVE_FROM_CART', payload: product })
                    }}><BsCartDash size='30' color='' /></div>

                  </div>
                })
              }
            </div>
            <Summary />
          </div>
        </div>
        :
        <div className="no-cart-item">Nothing in cart</div>
    }
  </>
}

export default Cart