import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import Product from "../components/Product"
import { getProduct } from "../actions/productAction.jsx";
import { useSelector, useDispatch } from "react-redux";


function HomeScreen() {
  const dispatch = useDispatch();
  const { loading,error,products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  },[dispatch]);

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
          <form class="d-flex" role="search">
            <input
              class="form-control me-2 border-primary-subtle border-5 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-primary" type="submit">
              Search
            </button>
          </form>
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
