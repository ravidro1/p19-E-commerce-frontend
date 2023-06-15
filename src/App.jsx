import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Settings from "./pages/Settings";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import DataContextProvider from "./context/DataContextProvider";

function App() {
  return (
    <DataContextProvider>
      <main
        className="d-flex flex-column bg-light"
        style={{
          width: "100vw",
          height: "100vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Header />

        <Container fluid className="w-100 h-100 p-0 m-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<></>} />
          </Routes>
        </Container>
      </main>
    </DataContextProvider>
  );
}

export default App;
