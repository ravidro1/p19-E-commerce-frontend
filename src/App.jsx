import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import DataContextProvider from "./context/DataContextProvider";

function App() {
  return (
    <DataContextProvider>
      <main
        className="d-flex flex-column bg-light"
        style={{ width: "100vw", height: "100vh", overflow: "auto" }}
      >
        <Header />

        <Container fluid className="w-100 h-100 p-0 m-0">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/sign-up" element={<SignUp />} /> */}
            {/* <Route path="*" element={} /> */}
          </Routes>
        </Container>
      </main>
    </DataContextProvider>
  );
}

export default App;
