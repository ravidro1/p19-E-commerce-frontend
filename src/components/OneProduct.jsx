import React from "react";

export default function OneProduct({ item }) {
  return (
    <div
      style={{
        boxShadow: "0px 10px 25px -15px #000000",
        flexBasis: "350px",
        aspectRatio: "1/1",
        backgroundColor: "white",
      }}
      className="d-flex flex-column gap-5 align-items-center justify-content-start rounded"
    >
      {item.name}
    </div>
  );
}
