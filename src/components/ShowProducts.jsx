import React from "react";
import { data } from "../demodata";
import OneProduct from "./OneProduct";

export default function ShowProducts() {
  //   const {} = useDataContext();
  console.log(data);
  return (
    <div
      style={{ gap: "50px", overflow: "" }}
      className="w-100 d-flex flex-wrap justify-content-around pt-5 pb-5 p-3"
    >
      {data.map((item, index) => {
        return <OneProduct key={index} item={item} />;
      })}
    </div>
  );
}
