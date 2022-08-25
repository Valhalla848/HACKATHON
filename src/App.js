import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <MainRoutes />
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
