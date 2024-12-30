import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
 let routes = createBrowserRouter([
  {path:"" , element:<Layout/> , children:[
    {path:"/" , element:<Home/>},
    {path:"/shop" , element:<Shop/>},
    {path:"/about" , element:<About/>},
    {path:'details/:prefix' , element:<Details/>},
    {path:"/register" , element:<Register/>},
    {path:"cart" , element:<Cart/>},
    {path: "checkout" , element:<CheckOut/>} ,
    {path:"contact" , element:<Contact/>},



  ],
},
  
 ],
 { basename: "e-commerce" }
);

  return <RouterProvider router={routes}/>
}

export default App;
