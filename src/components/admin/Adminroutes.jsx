import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import AddProduct from './AddProduct'
import AllProduct from './AllProducts'
import Orders from './Orders'
import DrawerAppBar from './Drawerappbar'

const Adminroutes = () => {
  return (
    <>
      <DrawerAppBar/>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/products' element={<AllProduct />} />
        <Route path='/orders' element={<Orders />} />
      </Routes >
    </>
  )
}

export default Adminroutes