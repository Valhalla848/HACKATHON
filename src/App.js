import MainRoutes from "./MainRoutes";
import {Box} from "@mui/material";
import Footer from "./components/Footer";
import ProductContextProvider from "./context/ProductContextProvider";

function App() {
  return (
    <>
<ProductContextProvider>
              {/*<Navbar />*/}
            <Box sx={{ marginLeft: "15vw" }}>
              <MainRoutes />
            </Box>
          {/*<Footer/>*/}
</ProductContextProvider>
    </>
  );
}

export default App;
