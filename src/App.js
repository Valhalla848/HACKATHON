import MainRoutes from "./MainRoutes";
import Navbar from "./MainRoutes";
import Box from "./MainRoutes";
import CartContextProvider from "./MainRoutes";
import ProductContextProvider from "./MainRoutes";
import AuthContextProvider from "./MainRoutes";

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
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
