<<<<<<< HEAD
import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const {
    cartDetails = [],
    updateCartDetails,
    deleteFromCart,
    updateFromCart,
  } = useContext(CartContext);
=======
import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  let { cartDetails, getCart, deleteFromCart, updateFromCart, updateCartDetails } = useContext(CartContext);
>>>>>>> a740c6c1a2f63e91efa7eb0cfde58e583e6037be

  async function removeItem(id) {
    await deleteFromCart(id);
    updateCartDetails();
  }

  async function updateItem(id, count) {
    await updateFromCart(id, count);
    if (count === 0) {
      await removeItem(id);
    }
    updateCartDetails();
  }

  useEffect(() => {
    updateCartDetails();
  }, []);

  return (
<<<<<<< HEAD
    <div className="container my-5">
      <div className="bg-success-subtle mx-auto p-5 ">
        <h1 className="mb-4 text-success">Cart Shop</h1>
        <div className="d-flex">
          <h3 className="h5">
            Total cart Items:{" "}
            <span className="text-success">{cartDetails.length}</span>
          </h3>
        </div>
        {cartDetails.length === 0 ? (
          <h3 className="text-center">Your cart is empty!</h3>
        ) : (
          cartDetails.map((ele) => (
            <div
              key={ele.id}
              className="row py-4 border-bottom align-items-center"
            >
=======
    <>
      <div className="container my-5">
        <div className="bg-success-subtle mx-auto p-5 ">
          <h1 className="mb-4 text-success">Cart Shop</h1>
          <div className="d-flex">
            <h3 className="h5">
              Total cart Item <span className="text-success">{cartDetails.length}</span>
            </h3>
          </div>
          {cartDetails?.map((ele) => (
            <div key={ele.id} className="row py-4 border-bottom align-items-center">
>>>>>>> a740c6c1a2f63e91efa7eb0cfde58e583e6037be
              <div className="col-md-1">
                <img className="w-100" src={ele.img} alt={ele.title} />
              </div>
              <div className="col-md-9">
                <h4>{ele.title}</h4>
                <h4>Price: {ele.price}</h4>
<<<<<<< HEAD
                <button
                  onClick={() => removeItem(ele.id)}
                  className="btn btn-outline-danger"
                >
                  Remove item
=======
                <button onClick={() => removeItem(ele.id)} className="btn btn-outline-danger">
                  remove item
>>>>>>> a740c6c1a2f63e91efa7eb0cfde58e583e6037be
                </button>
              </div>
              <div className="col-md-2">
                <div className="d-flex justify-content-between">
<<<<<<< HEAD
                  <button
                    onClick={() => updateItem(ele.id, ele.count + 1)}
                    className="btn btn-danger"
                  >
                    +
                  </button>
                  <span className="mx-2">{ele.count}</span>
                  <button
                    onClick={() => updateItem(ele.id, ele.count - 1)}
                    className="btn btn-info"
                  >
=======
                  <button onClick={() => updateItem(ele.id, ele.count + 1)} className="btn btn-danger">
                    +
                  </button>
                  <span className="mx-2">{ele.count}</span>
                  <button onClick={() => updateItem(ele.id, ele.count - 1)} className="btn btn-info">
>>>>>>> a740c6c1a2f63e91efa7eb0cfde58e583e6037be
                    -
                  </button>
                </div>
              </div>
            </div>
<<<<<<< HEAD
          ))
        )}
        <Link to={"/checkout"} className="btn bg-main w-100 text-white">
          Check Out
        </Link>
      </div>
    </div>
=======
          ))}
          <Link to={'/checkout'} className="btn bg-main w-100 text-white">
            Check Out
          </Link>
        </div>
      </div>
    </>
>>>>>>> a740c6c1a2f63e91efa7eb0cfde58e583e6037be
  );
}
