import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import Container  from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Products from './components/products';
import SimpleBottomNavigation from './components/navbar';
import {SimpleAlert, WarningAlert } from './components/alerts';

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showData, setShowData] = useState(true);
  const [alert, setAlert] = useState(false);
  const [removeAlert, setRemoveAlert] = useState(false);

  useEffect(() => {
    // Llamada a la API dentro de useEffect
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

  function addToCart(product) {
    setCart([...cart, product]);
    setTotalAmount(totalAmount + product.price);
    setAlert(true)
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  function removeToCart(id) {
    const updatedCart = cart.filter(product => product.id !== id);
    const productPrice = cart.find(product => product.id === id);
    const updatedAmount = totalAmount - productPrice.price;
    setTotalAmount(updatedAmount);
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
      <h2>Total: ${totalAmount}</h2>
      <Container fixed>
       <Grid container spacing={6} columns={12}>
          {showData ? (
            <Products data={data} addToCart={addToCart} removeToCart={removeToCart} />  // Mostrar productos
          ) : (
            <Products data={cart} removeToCart={removeToCart} />  // Mostrar carrito
          )}
        </Grid>  
      </Container>
    </>
  );
}

export default App
