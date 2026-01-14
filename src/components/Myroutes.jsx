import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Profile from './profile'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import Productdetails from './Productdetails'
import Cart from './Cart'
const Myroutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Profile' element={<Profile/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/productsdetail' element={<Productdetails/>}/>
            <Route path='/Cart' element={<Cart/>}/>
        </Routes>
    </>
  )
}

export default Myroutes