import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import { Box } from "@mui/system";
import "../CompStyle/ProductCard.css";
import { IconButton } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useCart } from "../../context/CartContextProvider";

export default function ProductCard({ el }) {
  const { deleteProduct, editProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <Card sx={{ maxWidth: 375 }} className="ProductCard">
      <CardMedia component="img" height="140" image={el.image} alt={el.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {el.desc}
        </Typography> */}
        <Typography variant="body2" color="error">
          {el.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate(`/products/${el.id}`)}
          className="CardBtn"
        >
          Learn More
        </Button>
        {user === "admin@admin.com" ? (
          <Button
            size="small"
            onClick={() => deleteProduct(el.id)}
            className="CardBtnDelete"
          >
            DELETE
          </Button>
        ) : (
          ""
        )}
        {user === "admin@admin.com" ? (
          <Button
            size="small"
            onClick={() => navigate(`/edit/${el.id}`)}
            className="CardBtn"
          >
            EDIT
          </Button>
        ) : (
          ""
        )}
        <IconButton onClick={() => addProductToCart(el)}>
          <ShoppingCartRoundedIcon
            color={checkProductInCart(el.id) ? "secondary" : ""}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}
