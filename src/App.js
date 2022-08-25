import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

import {Box} from "@mui/material";
import Footer from "./components/Footer";
import ProductContextProvider from "./context/ProductContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <>

    <AuthContextProvider>
<ProductContextProvider>
            <Navbar />

            <Box sx={{ marginLeft: "15vw" }}>
              <MainRoutes />
            </Box>
        <Footer />
</ProductContextProvider>
    </AuthContextProvider>

    </>
  );
}

export default App;
