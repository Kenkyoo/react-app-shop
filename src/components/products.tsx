import Cards from './card';
import Grid from '@mui/material/Grid2';

const Products = ({data, addToCart, removeToCart}) => {
    return (
  <>
    {data.map((product) => (
        <Grid key={product.id} size={{ xs: 12, md: 4 }}>  
          <Cards
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
            rate={product.rating.rate}
            onAddClick={() => addToCart(product)}
            onRemoveClick={() => removeToCart(product.id)}             
          />
        </Grid>  
        ))}
    </>
    )    
}

export default Products;