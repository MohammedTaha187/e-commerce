import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import { ColorRing } from "react-loader-spinner";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function Details() {
  let params = useParams();

  function getSpecificCategory(prefix) {
    return axios.get(`http://localhost:5000/products?cat_prefix=${prefix}`);
  }

  let { isLoading, isError, data } = useQuery("specificCategory", () =>getSpecificCategory(params.prefix));
 
  let {addToCart}  =useContext(CartContext)
  async function addCart(ele) {
    let res=await addToCart(ele)
    if (res.status==201) {
      toast.success('product is added successfully')
    }else{
      toast.error('product isnot added')
    }
    
  }

  
  

  return (
    <div className="container py-5">
      {isLoading ? (
        <div className="text-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <div className="row g-4">
          {data?.data.map((ele) => (
            <div key={ele.id} className="col-md-4">
              <div className="card shadow-sm">
                <img
                  src={ele.img}
                  className="card-img-top"
                  alt={ele.title}
                  style={{ maxHeight: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{ele.title}</h5>
                  <p className="card-text text-muted">
                    {ele.description?.slice(0, 50) ||
                      "No description available."}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success fw-bold">{ele.price}$</span>
                    <button
                      onClick={() => addCart(ele)}
                      className="btn btn-sm btn-success text-white"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}