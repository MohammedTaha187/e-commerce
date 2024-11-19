import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import { CartContext } from "../../context/CartContext"; 

function NavBar() {
  const { cartDetails } = useContext(CartContext);

  return <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark text-white">
      <div className="container">
        <Link className="nav-link" to={'/home'}><i className="fa-solid fa-cart-shopping" style={{color: '#95a0b1'}} />Shop </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={'/home'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/shop'}>Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/about'}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/contact'}>Contact</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={'/register'}>
                <i className="fa-regular fa-registered" style={{color: '#8893a5'}} />
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link" to={'/cart'}>
              <i className="fa-solid fa-cart-shopping"></i>
                {cartDetails?.length > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                    {cartDetails.length}
                  </span>
                )}
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  </>;
}

export default NavBar;
