import React, { useContext, useState } from "react";
import "./Home.css";
import { useQuery } from "react-query";
import axios from "axios";
import { CartContext } from "../../context/CartContext";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  function getAlHome() {
    return axios.get("http://localhost:5000/products");
  }

  let { isLoading, isError, data, isFetching, refetch } = useQuery(
    "Home",
    getAlHome
  );

  let { addToCart } = useContext(CartContext);
  async function addCart(ele) {
    let res = await addToCart(ele);
    if (res.status == 201) {
      toast.success("product is added successfully");
    } else {
      toast.error("product isnot added");
    }
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products.</div>;

  const filteredProducts = data?.data.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Toaster />
      <header className="header">
        <div className="search-container">
          <form
            className="d-flex"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </header>

      <section className="section">
        <div className="section-header text-center mb-5">
          <h2>Latest Products</h2>
        </div>
        <div className="home-row bg-dark">
          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            filteredProducts.map((ele) => (
              <div key={ele.id} className="col-md-4 col-lg-3 text-center">
                <div className="product-card shadow-sm">
                  <img src={ele.img} className="product-img" alt={ele.title} />
                  <div className="product-details">
                    <p className="product-title">
                      {ele.title.split(" ").slice(0, 3).join(" ")}
                    </p>
                    <h5 className="product-price">{ele.price}$</h5>
                    <button
                      onClick={() => addCart(ele)}
                      className="btn btn-success add-to-cart-btn w-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
