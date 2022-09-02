import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  pages: 0,
  oneProduct: {},
  categories: [0],
  comments: [],
  oneComment: {},
  searchData: "",
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 5),
      };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    case "GET_COMMENTS":
      return { ...state, comments: action.payload.results };
    case "GET_ONE_COMMENT":
      return { ...state, oneComment: action.payload };
    case "GET_SEARCH":
      return { ...state, searchData: action.payload };
    default:
      return state;
  }
}

const API = "https://autoshop-top.herokuapp.com/autoshop";

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  async function getProducts() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(
        `${API}/products/${window.location.search}`,
        config
      );
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategories() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(`${API}/categories/`, config);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function addProducts(newProduct) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/products/`, newProduct, config);
      console.log(res);
      getProducts();
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      await axios.delete(`${API}/products/${id}/`, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }
  async function editProduct(newProduct, id) {
    console.log(`${API}/products/${id}/`);
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization,
        },
      };

      await axios.patch(`${API}/products/${id}/`, newProduct, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }
  async function productDetail(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(`${API}/products/${id}/`, config);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: res.data,
      });

      getProducts();
    } catch (error) {
      console.log(error);
    }
  }
  async function getComments(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(`${API}/comments/${id}`, config);
      dispatch({
        type: "GET_COMMENTS",
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function addComments(newComment) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API}/comments/`, config, newComment);

      getComments();
    } catch (error) {
      console.log(error);
    }
  }
  const search = async (searchValue) => {
    const data = await axios(
      `${API}/products/search/?page=1&title=${searchValue}`
    );

    dispatch({
      type: "GET_SEARCH",
      payload: data.data,
    });
  };
  return (
    <productContext.Provider
      value={{
        addProducts,
        getProducts,
        getCategories,
        deleteProduct,
        editProduct,
        productDetail,
        addComments,
        search,
        searchData: state.searchData,
        products: state.products,
        pages: state.pages,
        categories: state.categories,
        oneProduct: state.oneProduct,
        comments: state.comments,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
