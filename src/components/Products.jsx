import React from 'react'
import { CartState } from '../context/Context'
import SingleProducts from './SingleProducts'

const Products = () => {

    const { productState: { product } } = CartState()
    const { filterState: { sort, byRating, bySearchQuery } } = CartState()
 
    const filterProducts = () => {
        let filter = product

        sort && filter.sort((a, b) => sort === 'Ascending' ? a.price - b.price : b.price - a.price)     
        byRating && (filter = filter.filter((p) => p.rating === byRating))
        bySearchQuery && (filter = filter.filter((p) => p.name.toLowerCase().includes(bySearchQuery.toLowerCase()) ))
        
        return filter
    }


    return (
        filterProducts().length ? filterProducts().map((product) => {
            return <SingleProducts prod={product} key={product.id} />
        }) :
            <div className='no-products'>No Products Available</div>
    )
}

export default Products