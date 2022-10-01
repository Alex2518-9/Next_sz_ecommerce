import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { StaticImageData } from 'next/image';


interface ProductCardProps{
    desc: string,
    title: string,
    price: number,
    image: string
}


const ImgMediaCard = ({desc, title, price, image }:ProductCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        src={image}
      />
      <CardContent>
        <Box component="div" sx={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography>{price}$</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;