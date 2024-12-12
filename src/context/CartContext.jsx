import React, { createContext, useState } from "react";
import axios from "axios";

export let CartContext = createContext();

function addToCart(product) {
  return axios
    .post("http://localhost:5000/cart", {
      ...product,
      count: 1,
    })
    .then((res) => res)
    .catch((err) => err);
}

function deleteFromCart(id) {
  return axios
    .delete(`http://localhost:5000/cart/${id}`)
    .then((res) => res)
    .catch((err) => err);
}

function updateFromCart(id, count) {
  return axios
    .patch(`http://localhost:5000/cart/${id}`, {
      count: count,
    })
    .then((res) => res)
    .catch((err) => err);
}

function clearCart() {
  return axios
    .get("http://localhost:5000/cart")
    .then((res) => {
      const deleteRequests = res.data.map((item) =>
        axios.delete(`http://localhost:5000/cart/${item.id}`)
      );
      return Promise.all(deleteRequests);
    })
    .catch((err) => console.error("Failed to clear cart:", err));
}

export default function CartContextProvider(props) {
  const [cartDetails, setCartDetails] = useState([]);

  async function updateCartDetails() {
    try {
      const { data } = await axios.get("http://localhost:5000/cart");
      setCartDetails(data);
    } catch (err) {
      console.error("Error fetching cart details:", err);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartDetails,
        setCartDetails,
        updateCartDetails,
        addToCart,
        deleteFromCart,
        updateFromCart,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
