import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import "../CompStyle/EditProduct.css";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const EditProduct = () => {
  const {
    getCategories,
    categories,
    editProduct,
    addProduct,
    productDetail,
    oneProduct,
  } = useProducts();
  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState(oneProduct);
  // console.log(product)
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  useEffect(() => {
    productDetail(id);
  }, []);

  // console.log(product)
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
    let newEditProduct = new FormData();
    newEditProduct.append("id", product.id);
    newEditProduct.append("title", product.title);
    newEditProduct.append("desc", product.desc);
    newEditProduct.append("price", product.price);
    newEditProduct.append("categories", product.categories);
    newEditProduct.append("image", product.image);
    let id = product.id;
    editProduct(newEditProduct, id);
    navigate("/products");
  }
  return (
    <div className="EditProduct">
      <div className="EditOver">
        <Box className="Edit-box">
          <Typography className="Edit-text">EDIT PANEL</Typography>
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
          <input type="file" name="image" onChange={handleInp} />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
          <Button variant="outlined" fullWidth onClick={handleSave}>
            EDIT
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default EditProduct;
