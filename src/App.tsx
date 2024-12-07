import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'
import Container  from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Products from './components/products';
import SimpleBottomNavigation from './components/navbar';
import {SimpleAlert, WarningAlert } from './components/alerts';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Footer from './components/footer';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  rating: {
    rate: number;
  };
}


function App() {
  const [data, setData] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showData, setShowData] = useState(true);
  const [alert, setAlert] = useState(false);
  const [removeAlert, setRemoveAlert] = useState(false);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(function (response) {
      // handle success
      setData(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }, []);

  function addToCart(product : Product) {
    setCart([...cart, product]);
    setTotalAmount(totalAmount + product.price);
    setAlert(true)
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  function removeToCart(id : number) {
    const updatedCart = cart.filter(product => product.id !== id);
    const productPrice = cart.find(product => product.id === id);

    if (productPrice) {
    const updatedAmount = totalAmount - productPrice.price;
    setTotalAmount(updatedAmount);
    }

    setCart(updatedCart);
    setRemoveAlert(true)
    setTimeout(() => {
      setRemoveAlert(false);
    }, 3000);
  }

  return (
    <>
      {alert && <SimpleAlert />}
      {removeAlert && <WarningAlert />}    
      <SimpleBottomNavigation setShowData={setShowData} />
      <Box style={{margin: "auto"}} sx={{ width: '100%', maxWidth: 1000, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        A simple shopping cart with React
      </Typography>
      </Box>
      <h2 className="heading">Total: ${totalAmount}</h2>
      <Container fixed>
       <Grid container spacing={6} columns={12}>
          {showData ? (
            <Products data={data} addToCart={addToCart} removeToCart={removeToCart} />  // Mostrar productos
          ) : (
            <Products data={cart} removeToCart={removeToCart} />  // Mostrar carrito
          )}
        </Grid>  
      </Container>
      <Footer />
    </>
  );
}

export default App
