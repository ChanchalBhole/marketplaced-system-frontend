import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Stack,
  Typography
} from '@mui/material';

import { addItem } from '../reduxwork/CartSlice';

const Products = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      let result = await axios.get("https://dummyjson.com/products");
      setAllProducts(result.data.products);
    };
    fetchProducts();
  }, []);

  // Filter products
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilterProducts(allProducts);
    } else {
      let filtered = allProducts.filter(prod => prod.category === selectedCategory);
      setFilterProducts(filtered);
    }
  }, [selectedCategory, allProducts]);

  const openDialog = (product) => {
    setSelectedProduct(product);
    setIsOpenDialog(true);
  };

  const closeDialog = () => {
    setSelectedProduct(null);
    setIsOpenDialog(false);
  };

  return (
    <>
      <Box sx={{ mt: 10 }}>

        {/* Category Filter */}
        <Stack direction="row" spacing={2} sx={{ justifyContent: "center", mb: 3 }}>
          <Chip label="All" onClick={() => setSelectedCategory("All")} color="info" />
          <Chip label="Beauty" onClick={() => setSelectedCategory("beauty")} color="info" />
          <Chip label="Fragrance" onClick={() => setSelectedCategory("fragrances")} color="info" />
          <Chip label="Furniture" onClick={() => setSelectedCategory("furniture")} color="info" />
          <Chip label="Grocery" onClick={() => setSelectedCategory("groceries")} color="info" />
        </Stack>

        {/* Product Cards */}
        <Grid container spacing={2}>
          {filterProducts.map(prod => (
            <Grid item xs={12} md={6} lg={3} key={prod.id}>
              <Card>
                <CardMedia
                  component="img"
                  image={prod.thumbnail}
                  sx={{ height: 220, cursor: "pointer" }}
                  onClick={() => openDialog(prod)}
                />
                <CardContent>
                  <Typography variant="h5">{prod.title}</Typography>
                  <Typography variant="h6" color={prod.price > 100 ? "error" : "success"}>
                    ₹ {prod.price}
                  </Typography>
                  <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
                    {prod.category}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='outlined' onClick={() => dispatch(addItem(prod))}>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Product Dialog */}
      <Dialog open={isOpenDialog} onClose={closeDialog}>
        <DialogTitle>{selectedProduct?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>Price: ₹ {selectedProduct?.price}</DialogContentText>
          <DialogContentText>Category: {selectedProduct?.category}</DialogContentText>
          <DialogContentText>Description: {selectedProduct?.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='error' onClick={closeDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Products;
