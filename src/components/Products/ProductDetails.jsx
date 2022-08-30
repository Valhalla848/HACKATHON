import React, {useEffect, useState} from 'react';
import {useProducts} from "../../context/ProductContextProvider";
import {useNavigate, useParams} from "react-router-dom";
import {Box, Button, Grid, Paper, TextField, Typography} from "@mui/material";
import {useAuth} from "../../context/AuthContextProvider";
const ProductDetails = () => {
    const {productDetail,oneProduct,comments}=useProducts()
    const {user}=useAuth()
    const {id}=useParams()
    useEffect(()=>{
        productDetail(id)
    },[])
    const {addComments}=useProducts()
    const [comment,setComment]=useState({
        body:'',
        product:id,
    })
    console.log(id)
    function handleInp(e){
        setComment({
            ...comment,[e.target.name]:e.target.value,
        })
    }
    const navigate=useNavigate()
    function handleSave(){
        let newComment=new FormData()
        newComment.append("body",comment.body)
        newComment.append("product",comment.product)
localStorage.setItem("comment",JSON.stringify(comment.body))
        addComments(newComment)
        navigate('/products')
    }

    return (
        <div>
            <Paper style={{marginTop:'300px'}} elevation={24}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img
                            src={oneProduct.image}
                            alt=""
                            style={{ maxWidth: "100%", maxHeight: "70vh" }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h3">{oneProduct.title}</Typography>
                        <Typography variant="subtitle1">{oneProduct.categories}</Typography>
                        <Typography variant="caption">{oneProduct.price}</Typography>
                        <Typography>{oneProduct.desc}</Typography>
                        <Box>
                            comments:
                            <Box sx={{mt:3}}>

                                    <abbr title={user}>{JSON.parse(localStorage.getItem("comment")) || ''}</abbr>

                            </Box>
                        </Box>

                    </Grid>
<Box style={{marginLeft:'40px'}}>


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