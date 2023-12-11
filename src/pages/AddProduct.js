import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, settiltle] = useState("");
  const [price, setprice] = useState(0);
  let navagate = useNavigate();

  const formSumited = (e) => {
    e.preventDefault();
    // axios
    //   .post("https://fakestoreapi.com/products", {
    //     title,
    //     price,
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     navagate("/Products");
    //   });
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      Headers: { "Content-type": "application/json" },

      body: JSON.stringify({
        title,
        price,
      }).than,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <h1>This is AddProduct page</h1>
      <form onSubmit={formSumited}>
        <div className="mb-3">
          <label htmlFor="productTitlle" className="form-label">
            NAme
          </label>
          <input
            type="text"
            className="htmlform-control"
            id="productTitlle"
            onChange={(e) => {
              settiltle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productprice" className="form-label">
            price
          </label>
          <input
            type="number"
            className="htmlform-control"
            id="productprice"
            onChange={(e) => {
              setprice(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          add product
        </button>
      </form>
    </>
  );
}
// import { Link } from "react-router-dom";

export default AddProduct;
