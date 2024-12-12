import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"; 
import toast, { Toaster } from 'react-hot-toast';
function Layout() {
  const location = useLocation();

  const showFooter = location.pathname !== "/about";

  return (
    <>
      <NavBar />
      <Toaster/>
      <Outlet/>
     
      {showFooter && <Footer />} 
    </>
  );
}

export default Layout;
