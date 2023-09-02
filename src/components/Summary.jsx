import React, { useEffect } from 'react'
import { CartState } from '../context/Context'
import { useState } from 'react'
import '../css/Summary.css'
import toast from 'react-hot-toast'

const Summary = () => {

    const { productState: { cart }, productDispatch } = CartState()
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(cart.reduce((initial, result) => initial + result.price * result.qty, 0))
    }, [cart])

    return (
        <div className="summary">
            <div className="summary-title">summary</div>
            <div className="order-table">
                <table>
                        <thead>
                        <th>Orders</th>
                        <th>Price</th>
                        <th>qty</th>
                        </thead>
                    <tbody>
                        {
                            cart?.map((product) => {
                                return <tr>
                                    <td>{product.name}</td>
                                    <td>Rs.{product.price}</td>
                                    <td>{product.qty}</td>
                                </tr>
                            })
                        }
                    </tbody>
                    <tfoot>
                        <td>Total</td>
                        <td>Rs.{total}</td>
                        <td></td>
                    </tfoot>
                </table>
            </div>
            <div className="proceed-btn" onClick={() => {
                toast.success('Order Proceed!')
            }}>proceed to order</div>
        </div>
    )
}

export default Summary