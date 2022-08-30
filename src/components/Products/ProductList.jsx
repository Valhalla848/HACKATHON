import React, {useEffect, useState} from "react";

import ProductCard from "./ProductCard";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {Box, Button, Pagination, TextField} from "@mui/material";
import {useProducts} from "../../context/ProductContextProvider";
import {useAuth} from "../../context/AuthContextProvider";

const ProductList = () => {
    const { getProducts, products, pages,addComments,comments } = useProducts();
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const {user}=useAuth()
    const {id}=useParams()
    const arr=[]
    useEffect(() => {
        getProducts();
    }, []);
    const [comment,setComment]=useState({
        body:'',
        product:1,
    })
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
        localStorage.setItem('comment',JSON.stringify(comment.body))
        addComments(newComment)

        navigate('/products')
    }


    useEffect(() => {
        getProducts();
    }, [searchParams]);

    useEffect(() => {
        setSearchParams({
            page: currentPage,
        });
    }, [currentPage]);
    return <div>
        <Box>
            {products.map(el=>(
                    <ProductCard key={el.id} el={el}/>
                )
            )}
        </Box>
        <Box>
            <Pagination count={pages}
                        variant="outlined"
                        color="primary"
                        onChange={(e,page)=>setCurrentPage(page)}
                        page={currentPage}/>
        </Box>


        {/*<Box>*/}
        {/*    <TextField*/}
        {/*        id="standard-basic"*/}
        {/*        label={user}*/}
        {/*        variant="standard"*/}
        {/*        fullWidth*/}
        {/*        name="body"*/}
        {/*        value={comment.body}*/}
        {/*        onChange={handleInp}*/}
        {/*    />*/}
        {/*    <Button onClick={handleSave}>SAVE COMMENT</Button>*/}
        {/*</Box>*/}
        {/*<Box sx={{mt:3}}>*/}
        {/*    {comments.map(el=>(*/}
        {/*        <abbr title={user}>{JSON.parse(localStorage.getItem('comment'))}</abbr>*/}
        {/*    ))}*/}






        {/*</Box>*/}
    </div>;
};

export default ProductList;