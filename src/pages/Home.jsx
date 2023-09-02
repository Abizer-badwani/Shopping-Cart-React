import React from 'react'
import Filter from '../components/Filter'
import Products from '../components/Products'
import Navbar from '../components/Navbar'
import '../css/Home.css'

const Home = () => {
  return (
    <>
      <Navbar />
    <div className='container'>
      <Filter />
      <div className='inner-container'>
        <Products />
      </div>
    </div>
    </>
  )
}

export default Home