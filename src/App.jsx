import { createBrowserRouter, Navigate,RouterProvider} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import CheckOut from "./components/CheckOut/CheckOut";
import Contact from "./components/Contact/Contact";
function App() {
  let routes = createBrowserRouter(
    [
      {
        path: "",
        element: <Layout />,
        children: [
          { path: "/e-commerce/home", element: <Home /> },  
          { path: "/e-commerce/shop", element: <Shop /> },  
          { path: "/e-commerce/about", element: <About /> },
          { path: "/e-commerce/details/:prefix", element: <Details /> },
          { path: "/e-commerce/register", element: <Register /> },
          { path: "/e-commerce/cart", element: <Cart /> },
          { path: "/e-commerce/checkout", element: <CheckOut /> },
          { path: "/e-commerce/contact", element: <Contact /> },
          { path: "", element: <Navigate to="/" replace /> },  
        ],
      },
    ],
    { basename: "/e-commerce" }
  );

  return <RouterProvider router={routes} />;
}

export default App;
