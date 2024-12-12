import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">© 2024 All Rights Reserved</p>
        <p className="mb-1">
          Developed by <span className="text-success">Mohamed</span>
        </p>
        <div className="social-icons d-flex justify-content-center gap-3 mt-2">
          <a
            href="https://web.facebook.com/profile.php?id=100008541101034&locale=ar_AR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook text-white"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter text-white"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin text-white"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
