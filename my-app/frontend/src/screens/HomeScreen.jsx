import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import Product from "../components/Product"
import { getProduct } from "../actions/productAction.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import Search from "../components/Search.jsx";

function HomeScreen() {
  const dispatch = useDispatch();
 
  const { keyword } = useParams();  // React Router v6+ uses useParams to get URL params
  const { loading, error, products } = useSelector((state) => state.products);

  

  // Dispatch product fetching based on the keyword (either from URL or search)
  useEffect(() => {
    dispatch(getProduct(keyword || ""));
  }, [dispatch, keyword]);

  

  return (
    <>
    {loading ? "loading":

    <div class="container-fluid g-0 ">
    <div class="container text-center mt-5">
      <div class="row justify-content-md-center">
        <div class="col-md-auto mt-5">
          <h1>
            <strong>Hello,What Do You Want To Learn</strong>
          </h1>
        </div>
      </div>
    </div>
    <div class="container text-center mt-4">
      <div class="row justify-content-md-center">
        <div class="col-md-6">
           <Search/>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-evenly mt-5">
      <div class="container text-center">
        <div class="row">
          
          <div class="col">
          <div>
            {products && products.map((product) => <Product product={product} />)}
         
          </div>
            
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>

  }
    </>
  );
}

export default HomeScreen;
