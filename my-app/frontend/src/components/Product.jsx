import React from 'react';
import { Link, NavLink } from 'react-router';
import ReactStars from "react-rating-stars-component";

const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true,
}

const Product = ({product}) => {
  return (
          <>
          <Link className='productCard' to={`/product/${product._id}`} >
          <div className="col">
            <div className="card">
              <img
                src={product.images[0].url}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  
                </p>
                <div>
                  <ReactStars {...options} /> <span> {product.numofReviews} Reviews </span>
                </div>
                <NavLink to={`/product/${product._id}`} className="btn btn-primary">
                  <button className="btn btn-primary" type="submit">
                    Go to Course
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </Link>
       </>
  )
}

export default Product