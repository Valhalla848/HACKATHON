import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {IconButton} from "@mui/material";
// import {useCard} from "../../contexts/cartContextProvider";
import {useProducts} from "../../context/ProductContextProvider";
export default function ProductCard({ item }) {
    const { deleteProduct } = useProducts();

    const navigate = useNavigate();
    // const {addProductToCart,checkProductInCart}=useCard()
    return (
        <Card sx={{ width: 300, m: 3 }}>
            <CardMedia
                component="img"
                height="140"
                image={item.picture}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    $ {item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => deleteProduct(item.id)}>
                    DELETE
                </Button>

                <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
                    EDIT
                </Button>

                <Button size="small" onClick={() => navigate(`/products/${item.id}`)}>
                    MORE
                </Button>

                {/*<IconButton onClick={()=>addProductToCart(item)}><ShoppingCartIcon color={checkProductInCart(item.id)?'secondary':''}/></IconButton>*/}
            </CardActions>
        </Card>
    );
}
