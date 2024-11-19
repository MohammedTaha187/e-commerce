import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { ColorRing } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import './Shop.css'

export default function Shop() {
  function getAllShop() {
    return axios.get('http://localhost:5000/categories');
  }

  const { isLoading, isError, data, isFetching, refetch } = useQuery('Shop', getAllShop, {});

  return (
    <>
      <div className="py-5">
        {isLoading ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        ) : isError ? (
          <div className="alert alert-danger">Failed to load categories. Please try again later.</div>
        ) : (
          <div className="row g-5 mx-auto bg-dark">
            {data?.data.map((ele) => (
              <div key={ele.id} className="col-md-3 shadow-lg">
                <Link to={'/details/' + ele.prefix}>
                  <div className="Shop">
                    <img src={ele.img} className="w-100" alt={ele.title} />
                    <h2 className="text-success fw-bolder p-2">{ele.title}</h2>
                  </div>
                </Link>
              </div>
              
              
            ))}
          </div>
        )}
      </div>
    </>
  );
}
