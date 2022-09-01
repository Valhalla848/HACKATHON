import {
  Box,
  Button,
  FormControl,
  Select,
  TextField,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContextProvider";
import "../CompStyle/AdminPage.css";

const AddProduct = () => {
  const { getCategories, categories, addProducts, addComments } = useProducts();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    desc: "",
    price: "",
    categories: [],
    image: "",
  });
  function handleInp(e) {
    if (e.target.name === "image") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  }
  useEffect(() => {
    getCategories();
  }, []);
  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", product.title);
    newProduct.append("desc", product.desc);
    newProduct.append("price", product.price);
    newProduct.append("categories", product.categories);
    newProduct.append("image", product.image);

    navigate("/products");
    addProducts(newProduct);
  }

  return (
    <div className="AddProduct">
      <div className="AddOver">
        <Box className="Add-box">
          <Typography className="Add-text">ADMIN PANEL</Typography>
          <TextField
            id="standard-basic"
            label="NAME"
            variant="standard"
            fullWidth
            name="title"
            value={product.title}
            onChange={handleInp}
          />
          <TextField
            id="standard-basic"
            label="DESCRIPTION"
            variant="standard"
            fullWidth
            name="desc"
            value={product.desc}
            onChange={handleInp}
          />
          <TextField
            id="standard-basic"
            label="PRICE"
            variant="standard"
            fullWidth
            name="price"
            onChange={handleInp}
            value={product.price}
          />

          {/*<input  type="file"  name='image' onChange={handleInp}/>*/}
          <input
            type="file"
            name="image"
            onChange={handleInp}
            className="Add-img"
          />
          <FormControl fullWidth className="Categ">
            <InputLabel id="demo-simple-select-label">CATEGORIES</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={product.categories}
              label="Age"
              onChange={handleInp}
              name="categories"
            >
              {categories?.map((el) => (
                <MenuItem value={el.id} key={el.id}>
                  {el.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => {
              handleSave(product);
              navigate("/products");
            }}
          >
            ADD PRODUCT
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default AddProduct;
