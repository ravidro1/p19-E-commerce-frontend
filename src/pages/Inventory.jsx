import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SearchProducts from "../components/SearchProducts";
import { useNavigate } from "react-router-dom";

export default function Inventory() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="w-100 h-100 d-flex flex-column align-items-center">
      
      <div className="w-100 d-flex justify-content-end" style={{}}>
        <Button onClick={() => navigate("/AddProduct")} className="m-4">
          <i className="fa-sharp fa-solid fa-plus" />
          &nbsp; Add Product{" "}
        </Button>
      </div>
      <div style={{ width: "60%" }}>
        <SearchProducts setSearchValue={setSearchValue} />
      </div>
    </div>
  );
}
