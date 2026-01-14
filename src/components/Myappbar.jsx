import { Flare } from '@mui/icons-material'
import { AppBar, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
const Myappbar = () => {
    let navigator = useNavigate()
    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h4'>
                        My Shop
                    </Typography>
                    <List
                        sx={{
                            display: "flex"
                        }}>
                        <ListItem onClick={() => {
                            navigator("/")
                        }}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText>
                                Home
                            </ListItemText>
                        </ListItem>

                        <ListItem onClick={() => {
                            navigator("/about")
                        }}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText>
                                About
                            </ListItemText>
                        </ListItem>

                        <ListItem onClick={() => {
                            navigator("/contact")
                        }}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText>
                                Contact
                            </ListItemText>
                        </ListItem>

                        <ListItem onClick={() => {
                            navigator("/profile")
                        }}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText>
                                Profile
                            </ListItemText>
                        </ListItem>
                        <ListItem onClick={() => {
                            navigator("/products")
                        }}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText>
                                product
                            </ListItemText>
                        </ListItem>
                        <ListItem onClick={() => {
                            navigator("/cart")
                        }}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText>
                              cart
                            </ListItemText>
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Myappbar