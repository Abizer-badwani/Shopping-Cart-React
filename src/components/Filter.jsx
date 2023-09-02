import React, { useState } from 'react'
import '../css/Filter.css'
import Rating from './Rating'
import { CartState } from '../context/Context'

const Filter = () => {

  const { filterState: { sort, byRating }, filterDispatch } = CartState()

  return (
    <div className='filter-container'>
      <h3>Filter Products</h3>
      <div className='sorting'>
        <p className={sort === 'Ascending' ? 'active': ''} onClick={() => { filterDispatch({type: 'SORT_FILTER', payload: 'Ascending'}) }} >
          Ascending
        </p>
        <p className={sort === 'Descending' ? 'active': ''} onClick={() => { filterDispatch({type: 'SORT_FILTER', payload: 'Descending'}) }}>
          Decending
        </p>
        <div className='rate'><Rating rating={byRating} onRate={(i) => filterDispatch({type: 'RATE_FILTER', payload: i})} /></div>
        <button type='submit' onClick={() => filterDispatch({type: 'CLEAR_FILTER'})}>Clear Filter</button>
      </div>
    </div>
  )
}

export default Filter