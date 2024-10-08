import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cards = ({ title, description, image, price, rate, onAddClick, onRemoveClick }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             {description}
            </Typography>
          </CardContent>
          <CardActions>
          <Button onClick={onAddClick} size="small">Add</Button>
          <Button onClick={onRemoveClick} size="small">Remove</Button>
            <Button size="small">{rate}</Button>
            <Button size="small">{price}</Button>
          </CardActions>
        </Card>
      );
};

export default Cards;