import React, { useEffect, useState } from "react";
import car1 from "../CompImg/ProductsList/lamborghini-huracan-lp-610-4-1.webp";
import ProductCard from "./ProductCard";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Box, Button, Pagination, TextField, Typography } from "@mui/material";
import { useProducts } from "../../context/ProductContextProvider";
import { useAuth } from "../../context/AuthContextProvider";
import "../CompStyle/ProductsList.css";
import img1 from "../CompImg/ProductsList/VETRINA-BOUTIQUE.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductList = () => {
  const {
    getProducts,
    products,
    pages,
    addComments,
    comments,
    search,
    searchData,
  } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const { user } = useAuth();
  const { id } = useParams();
  const arr = [];
  useEffect(() => {
    getProducts();
  }, []);
  const [comment, setComment] = useState({
    body: "",
    product: 1,
  });

  console.log(searchData);
  console.log(products);
  function handleInp(e) {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  }
  function handleSearch(e) {
    setSearchValue(e.target.value);
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

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="List1">
        <div className="ListOver">
          <div className="List1-text" data-aos="fade-right">
            <span className="List1-text-up">LAMBORGHINi</span>
            <br />
            <span className="List1-text-down">STORE</span>
            <div className="List1-text-btn"></div>
          </div>
        </div>
      </div>
      <div className="MainList2">
        <div className="List2">
          <div className="List2-text">
            <div className="List2-text-div1">
              MENSWEAR AND ACCESSORIES COLLECTION
            </div>
            <div className="List2-text-div2">
              The iconic features of the super sports cars reflected in the
              Menswear and Travel Collections marked by an informal style and
              contemporary taste.
            </div>

            <div className="List2-text-div4">MEN</div>
            <div className="List2-text-div4">WOMEN</div>
            <div className="List2-text-div4">ACCESSORIES</div>
            <div className="List2-text-div4">JUNIOR</div>
            <div className="List2-text-div4">SQUADRA CORSE</div>
            <div className="List2-text-div4">COLLECTIBLES</div>
          </div>
          <img src={car1} alt="" className="List2-img" />
        </div>
      </div>
      <div className="MainSearch">
        <div className="search">
          <input type="text" className="search-input" onChange={handleSearch} />
          <button className="search-btn" onClick={() => search(searchValue)}>
            SEARCH
          </button>

          <Box className="search-result">
            <Typography>Result</Typography>
            <Box>
              {searchData.map((el) => (
                <ProductCard key={el.id} el={el} />
              ))}
            </Box>
          </Box>
        </div>
      </div>
      <Box className="List3">
        <div className="list3-block">
          {products.map((el) => (
            <ProductCard key={el.id} el={el} />
          ))}
        </div>
      </Box>
      <div className="Pag">
        <Box className="Pag-box">
          <Pagination
            count={pages}
            variant="outlined"
            color="primary"
            onChange={(e, page) => setCurrentPage(page)}
            page={currentPage}
          />
        </Box>
      </div>
      <div className="List4">
        <div className="List4-news">
          <img src={img1} alt="" className="List4-news-img" />
          <div className="List4-news-text">
            <div className="List4-news-text-div1">STORE</div>
            <div className="List4-news-text-div2">
              <span className="List4-news-text-div2-span">Via Modena 12</span>
              <span className="List4-news-text-div2-span">
                40019 Sant’Agata Bolognese
              </span>
              <span className="List4-news-text-div2-span">Bologna – Italy</span>
              <span className="List4-news-text-div2-span">+39 051 9597611</span>
            </div>
            <div className="List4-news-text-div2">
              <span className="List4-news-text-div2-span">Hours</span>
              <span className="List4-news-text-div2-span">
                Open Monday to Friday from 10 a.m. to 6:30 p.m.
              </span>
              <span className="List4-news-text-div2-span">
                Saturday, Sunday and Holidays from 9:30 a.m. to 1 p.m. / from 2
              </span>
              <span className="List4-news-text-div2-span">to 6:30 p.m.</span>
            </div>
            <div className="List4-news-text-div2">
              <span className="List4-news-text-div2-span">
                Days Closed in 2021
              </span>
              <span className="List4-news-text-div2-span">
                January 1, May 1, August 15, December 25
              </span>
              <span className="List4-news-text-div2-span">
                Early closing at 2:30 p.m. on December 24 and 31
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
