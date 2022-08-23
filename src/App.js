import MainRoutes from "./MainRoutes";

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
