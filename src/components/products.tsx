import Cards from './card';
import Grid from '@mui/material/Grid2';

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  rating: {
    rate: number;
  };
}

interface ProductsProps {
  data: Product[];
  addToCart?: (product: Product) => void;
  removeToCart: (id: number) => void;
}

const Products = ({data, addToCart, removeToCart} : ProductsProps) => {
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
            onAddClick={() => addToCart?.(product)}
            onRemoveClick={() => removeToCart(product.id)}             
          />
        </Grid>  
        ))}
    </>
    )    
}

export default Products;