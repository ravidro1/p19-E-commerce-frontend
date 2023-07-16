import React, { useEffect } from "react";
import { data } from "../demodata";
import OneProduct from "./OneProduct";
import useDataContext from "../context/useDataContext";

export default function ShowProducts() {
  const { products } = useDataContext();

  console.log(products);
  return (
    <div
      style={{ gap: "50px", overflow: "" }}
      className="w-100 d-flex flex-wrap justify-content-around pt-5 pb-5 p-3"
    >
      {products?.map((item, index) => {
        return <OneProduct key={index} item={item} />;
      })}
    </div>
  );
}
