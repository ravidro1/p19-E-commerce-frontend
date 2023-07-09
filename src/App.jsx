import "bootstrap/dist/css/bootstrap.min.css";
import "./style/styleImport";
import "./config/axios.config";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Settings from "./pages/Settings";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import History from "./pages/History";
import AdminSignUp from "./pages/AdminSignUp";
import Inventory from "./pages/Inventory";
import DefaultPage from "./pages/DefaultPage";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DataContextProvider from "./context/DataContextProvider";

import UserProtectedRoute from "./components/Navigate/UserProtectedRoute";
import AutoNavigateRoute from "./components/Navigate/AutoNavigateRoute";
import AdminProtectedRoutes from "./components/Navigate/AdminProtectedRoutes";

function App() {
  return (
    <DataContextProvider>
      <main
        className="d-flex flex-column bg-light justify-content-between"
        style={{
          // width: "100vw",
          minHeight: "100vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Header />
        {/* Inventory */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route element={<AutoNavigateRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/admin-sign-up" element={<AdminSignUp />} />
            </Route>
            <Route element={<UserProtectedRoute />}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/history" element={<History />} />
            </Route>
            <Route element={<AdminProtectedRoutes />}>
              <Route path="/inventory" element={<Inventory />} />
            </Route>
            <Route path="*" element={<DefaultPage />} />
          </Routes>
        </div>

        <Footer />
      </main>
    </DataContextProvider>
  );
}

export default App;
