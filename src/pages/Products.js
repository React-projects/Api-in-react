import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Products.css";
import Swal from "sweetalert2";

function Products() {
  const getAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setproducts(data);
      });
  };
  const [products, setproducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);
  const DeletedProduct = (product) => {
    Swal.fire({
      title: `Are YOu WAnt sure deleted this ${product.title}?`,
      showCloseButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`https://fakestoreapi.com/products/${product.id}`, {
          method: "DELETED",
        })
          .then((res) => res.json())
          .then((data) => {
            getAllProducts();
          });
      }
    });
  };

  return (
    <>
      <h1>This is Products page</h1>
      <Link to={"/Products/add"} className="btn btn-success btn-sm mt-3">
        Adding Product
      </Link>
      <table className="table table-striped table-hover mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>product</th>
            <th>description</th>
            <th>price</th>
            <th>opperations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      DeletedProduct(product);
                    }}
                  >
                    Deleted
                  </button>
                  <Link
                    className="btn btn-info btn-sm"
                    to={`/Products/${product.id} `}
                  >
                    {" "}
                    view
                  </Link>
                  <button className="btn btn-primary btn-sm"> edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <Outlet/> */}
    </>
  );
}

export default Products;
