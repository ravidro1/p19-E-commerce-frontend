import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

export default function AddProduct() {
  const [newProductData, setNewProductData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    picURL: null,
  });

  const pictureRef = useRef();

  const [isErrorMessageShow, setIsErrorMessageShow] = useState(false);

  useEffect(() => {
    setIsErrorMessageShow(false);
  }, [newProductData]);

  const submitAddProduct = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/product/create", newProductData);
      console.log(data);
      setIsErrorMessageShow(false);
      if (pictureRef && pictureRef.current) pictureRef.current.value = null;
    } catch (error) {
      console.error(error);
      setIsErrorMessageShow(true);
    }
  };

  const uploadImage = async (event, resultFunction, onError) => {
    try {
      const file = event.target.files[0];

      let reader = new FileReader();

      reader.onload = () => {
        resultFunction(reader.result);
      };

      reader.readAsDataURL(file);
    } catch (error) {
      resultFunction(null);
      onError();
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      {isErrorMessageShow && (
        <Alert variant="danger" style={{ width: "75%" }}>
          Error
        </Alert>
      )}
      <div
        style={{ width: "75%" }}
        //   className="m-5"
      >
        <Form onSubmit={submitAddProduct}>
          <Form.Control
            size="lg"
            value={newProductData.name}
            onChange={(e) =>
              setNewProductData({ ...newProductData, name: e.target.value })
            }
            placeholder="Name"
            className="shadow-none my-5"
          />
          <Form.Control
            size="lg"
            value={newProductData.description}
            onChange={(e) =>
              setNewProductData({
                ...newProductData,
                description: e.target.value,
              })
            }
            placeholder="Description"
            className="shadow-none my-5"
          />
          <Form.Control
            size="lg"
            value={newProductData.price}
            onChange={(e) =>
              setNewProductData({ ...newProductData, price: e.target.value })
            }
            type="number"
            placeholder="Price"
            className="shadow-none my-5"
          />
          <Form.Control
            size="lg"
            value={newProductData.quantity}
            onChange={(e) =>
              setNewProductData({ ...newProductData, quantity: e.target.value })
            }
            type="number"
            placeholder="Quantity"
            className="shadow-none my-5"
          />

          <Form.Control
            ref={pictureRef}
            onChange={(e) =>
              uploadImage(
                e,
                (result) =>
                  setNewProductData({ ...newProductData, picURL: result }),
                () => {
                  if (pictureRef && pictureRef.current)
                    pictureRef.current.value = null;
                }
              )
            }
            size="lg"
            className="shadow-none my-5"
            type="file"
          />

          <Button type="submit" size="lg" className="w-100">
            {" "}
            Create Product{" "}
          </Button>
        </Form>{" "}
      </div>
    </div>
  );
}
