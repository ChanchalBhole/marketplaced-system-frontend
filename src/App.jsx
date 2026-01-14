import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import MyFooter from './components/Footer'
import MyAppBar from './components/Myappbar'
import MyRoutes from './components/Myroutes'
import { Box } from '@mui/material'
import Adminroutes from './components/admin/Adminroutes'
function App() {

  return (
    <>
       <Box sx={{
        display: "flex",
        flexDirection: "column"
      }}>
        <Box sx={{
          flex: 3
        }}>
          <MyAppBar />
        </Box>
        <Box sx={{
          flexGrow: 1
        }}>
          <MyRoutes />
        </Box>
        {/* <Box sx={{
          flex: 1
        }}>
          <MyFooter />
        </Box> */}
      </Box> 
      {/* <Drawerappbar/>
      <Adminroutes/> */}
    </>
  )
}

export default App