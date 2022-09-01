import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";

import { Box } from "@mui/material";

import Footer from "./components/Footer";
import ProductContextProvider from "./context/ProductContextProvider";
import AuthContextProvider, { useAuth } from "./context/AuthContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <Navbar />
            <Box sx={{ marginLeft: "15vw" }}>
              <MainRoutes />
            </Box>
            <Footer />
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
