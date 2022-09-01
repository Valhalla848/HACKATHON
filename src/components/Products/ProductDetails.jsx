import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContextProvider";
import "../CompStyle/ProductDetails.css";
const ProductDetails = () => {
  const { productDetail, oneProduct, comments } = useProducts();
  const { user } = useAuth();
  const { id } = useParams();
  useEffect(() => {
    productDetail(id);
  }, []);
  const { addComments } = useProducts();
  const [comment, setComment] = useState({
    body: "",
    product: id,
  });
  console.log(id);
  function handleInp(e) {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  }
  const navigate = useNavigate();
  function handleSave() {
    let newComment = new FormData();
    newComment.append("body", comment.body);
    newComment.append("product", comment.product);
    localStorage.setItem("comment", JSON.stringify(comment.body));
    addComments(newComment);
    navigate("/products");
  }

  return (
    <div className="Details">
      <Paper elevation={24} className="Details-block">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img
              src={oneProduct.image}
              alt=""
              style={{ maxWidth: "100%", maxHeight: "70vh" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h3" className="Details-title">
              {oneProduct.title}
            </Typography>
            <Typography
              variant="subtitle1"
              className="Details-cat"
              sx={{ mt: 2 }}
            >
              CATEGORIES:{oneProduct.categories}
            </Typography>
            <Typography variant="caption" className="Details-price">
              PRICE:{oneProduct.price}
            </Typography>
            <Typography className="Details-desc" sx={{ mt: 4 }}>
              {oneProduct.desc}
            </Typography>
            <Box sx={{ mt: 4 }}>
              COMMENTS:
              <Box sx={{ mt: 1 }}>
                <abbr title={user} className="comments">
                  {JSON.parse(localStorage.getItem("comment")) || ""}
                </abbr>
              </Box>
            </Box>
          </Grid>
          <Box style={{ marginLeft: "40px" }}>
            <Box>
              <TextField
                id="standard-basic"
                label={user}
                variant="standard"
                fullWidth
                name="body"
                value={comment.body}
                onChange={handleInp}
              />
              <Button onClick={handleSave}>SAVE COMMENT</Button>
            </Box>
          </Box>
        </Grid>
      </Paper>
    </div>
  );
};

export default ProductDetails;
