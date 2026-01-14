import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Drawerappbar = () => {
    let navigator = useNavigate()
    const [isDrawerOpen, setisDrawerOpen] = useState(false)

    let openDrawer = () => {
        setisDrawerOpen(true)
    }
    let closeDrawer = () => {
        setisDrawerOpen(false)
    }

    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <IconButton onClick={() => openDrawer()} sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h4'>
                        My Shop
                    </Typography>

                </Toolbar>
            </AppBar>
            <Drawer  open={isDrawerOpen} onClose={closeDrawer}>
                <List
                    sx={{
                        display: "flex",
                        flexDirection:"column",
                        width:300
                    }}>
                    <ListItem onClick={() => {
                        navigator("/")
                        closeDrawer()
                    }}>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText>
                            Dashboard
                        </ListItemText>
                    </ListItem>

                    <ListItem onClick={() => {
                        navigator("/addproduct")
                        closeDrawer()

                    }}>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText>
                            Add Product
                        </ListItemText>
                    </ListItem>

                    <ListItem onClick={() => {
                        navigator("/products")
                        closeDrawer()

                    }}>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText>
                            All Product
                        </ListItemText>
                    </ListItem>

                    <ListItem onClick={() => {
                        navigator("/orders")
                        closeDrawer()

                    }}>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText>
                            Orders
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </Box>

    
  )

}
export default Drawerappbar