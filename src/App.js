import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Navbar />
      <Box>
        <MainRoutes />
      </Box>
      <Footer />
    </>
  );
}

export default App;
