import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'


const ProdDetails = () => {
    let prodData = useLocation().state
    return (
        <>
            <Box sx={{
                mt: 10
            }}>
                <Typography variant='h4'>Details</Typography>
                <Typography variant='h5'>{prodData.title}</Typography>
                <Typography variant='h5'>{prodData.price}</Typography>
                <Typography variant='h5'>{prodData.category}</Typography>
                <Typography variant='h5'>{prodData.description}</Typography>
                <Typography variant='h5'>{prodData.tags.join(" ")}</Typography>
                <Typography variant='h5'>{prodData.dimensions.width}</Typography>
            </Box>
            <Box>
                <Typography variant='h3' sx={{
                    textAlign: "center"
                }}>Reviews</Typography>
                <Grid container>
                    {
                        prodData.reviews.map((review) => {
                            return (
                                <Grid item size={
                                    {
                                        sm: 12,
                                        md: 6,
                                        lg: 3
                                    }
                                }>
                                    <Card>
                                        <CardContent>
                                            <Typography variant='body1'>{review.reviewerName}</Typography>
                                            <Typography variant='body1'>{review.rating}</Typography>
                                            <Typography variant='body1'>{review.comment}</Typography>
                                            <Typography variant='body1'>{review.reviewerEmail}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}

export default ProdDetails