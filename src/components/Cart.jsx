import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calcilateTotal, decreQty, increQty, removeItem } from '../reduxwork/CartSlice'



const Cart = () => {
    let { cartItems, cartTotal } = useSelector((state) => state.cart)

    let dispatcher = useDispatch()

    dispatcher(calcilateTotal())
    return (
        <>
            <Box sx={{
                mt: 10
            }}>
                <Typography variant='h3'>Cart Items</Typography>
                <Grid container>
                    {
                        cartItems.map((prod) => {
                            let pId = prod.id
                            return (
                                <Grid item
                                    // onClick={() => navigator("/productdetails", { state: prod })}
                                    size={{
                                        sm: 12,
                                        md: 6,
                                        lg: 3
                                    }}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant='h4'>{prod.id}</Typography>
                                            <Typography variant='h4'>{prod.title}</Typography>
                                            {/* <Typography variant='h4'>{prod.description}</Typography> */}
                                            <Typography variant='h4' color={prod.price > 100 ? "error" : "success"}>{prod.price}</Typography>
                                            <Typography variant='h4'>{prod.category}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={() => dispatcher(decreQty({ pId }))} variant='contained' color='error'>-</Button>
                                            <Typography variant='h4'>{prod.Qty}</Typography>
                                            <Button onClick={() => dispatcher(increQty({ pId }))} variant='contained' color='primary'>+</Button>
                                            <Button onClick={() => {
                                                dispatcher(removeItem({ pId }))
                                            }} variant='contained' color='error'>X</Button>

                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Typography variant='h4'>Total:{cartTotal}</Typography>
            </Box>
        </>
    )
}

export default Cart