import React, { useState } from "react";
import SearchProducts from "../components/SearchProducts";
import { Button, Container } from "react-bootstrap";
import ShowProducts from "../components/ShowProducts";
import axios from "axios";

export default function Home() {
  
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <section className="w-50 p-3">
        <SearchProducts setSearchValue={setSearchValue} />
      </section>
      <hr className="w-75" />
      <Container style={{ overflow: "" }} fluid className=" w-100 p-0">
        <ShowProducts />
      </Container>
    </div>
  );
}
