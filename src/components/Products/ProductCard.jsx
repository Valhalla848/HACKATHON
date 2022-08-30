import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useProducts} from "../../context/ProductContextProvider";
import {useNavigate} from "react-router-dom";


export default function ProductCard({el}) {
    const {deleteProduct,editProduct}=useProducts()
    const navigate=useNavigate()
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={el.image}
                alt={el.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {el.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {el.desc}
                </Typography>
                <Typography variant="body2" color="error">
                    {el.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>deleteProduct(el.id)}>DELETE</Button>
                <Button size="small" onClick={()=>navigate(`/products/${el.id}`)}>Learn More</Button>
                <Button size="small" onClick={()=>navigate(`/edit/${el.id}`)}>EDIT</Button>
            </CardActions>
        </Card>
    );
}
