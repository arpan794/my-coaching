import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../actions/productAction.jsx"

import { useParams } from 'react-router-dom';

function CourseScreen() {
  const { id } = useParams();  // Destructure the `id` from the params
  const dispatch = useDispatch();
  const {   product } = useSelector((state) => state.productDetails);

  useEffect(() => {
    if (id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <div className="d-flex justify-content-evenly">
        <div className="container-fluid text-center mt-5">
          <div className="row align-items-start mt-5">
            <div className="col border bg-light">
              <h1 className="text-primary"><strong>{product.name}</strong></h1>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="container mt-5 g-0">
          <div className="card bg-light">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={product.name} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                  <p>
                    <NavLink to="/signup" className="btn btn-primary">Login to Register</NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="container mt-5 ">
          <div className="row align-items-center bg-light rounded">
            <div className="col">
              <h2 className="text-primary"><strong>Course Content</strong></h2>
            </div>
          </div>
          <div className="row align-items-start bg-light ">
            <div className="col border align-items-start rounded">
              <h6>{product.content}</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="container mt-5">
          <div className="row bg-light rounded">
            <div className="col">
            <h2 className="text-primary"><strong>Course Instructor</strong></h2>
            </div>
          </div>

          <div className="row bg-light mb-5">
            <div className="col border rounded">
              <div className="col-2">
                <img src={product.name} className="img-fluid" alt="..." />
              </div> 
                <h4><p>{product.name}</p></h4>
                <h5><p>{product.name}</p></h5>

                <h6>{product.name}</h6>
              <p>Associated Batches:</p>
                <p>{product.name}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default CourseScreen;
