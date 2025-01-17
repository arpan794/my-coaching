import React from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

function SignupScreen() {
  return (
    <>
      <div className="row mt-5">
        <div className="col-6">
          <div className="d-flex mt-5 ">
            <div className="container w-75 h-75 ms-5 me-0 bg-light ">
              <div className="signup-container">
                <div className="row bg-primary rounded-top-3">
                  <h2 className="text-center mb-4 mt-3 text-white ">Sign in</h2>
                </div>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label hmltFor="inputEmail4" className="form-label">
                      <strong>Email</strong>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="col-md-6">
                    <label hmltFor="inputPassword4" className="form-label">
                      <strong>Password</strong>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="col-12">
                    <label hmltFor="inputAddress" className="form-label">
                      <strong>Address</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                  <div className="col-12">
                    <label hmltFor="inputAddress2" className="form-label">
                      <strong>Address 2</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                    />
                  </div>
                  <div className="col-md-6">
                    <label hmltFor="inputCity" className="form-label">
                      <strong>City</strong>
                    </label>
                    <input type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="col-md-4">
                    <label hmltFor="inputState" className="form-label">
                      <strong>State</strong>
                    </label>
                    <select id="inputState" className="form-select">
                      <option defaultValue="">Choose...</option>
                      <option>Uttar Pradesh</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label hmltFor="inputZip" className="form-label">
                      <strong>Zip</strong>
                    </label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" hmltFor="gridCheck">
                        <strong>Remember Me</strong>
                      </label>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </div>
                  <div className="text-center mt-3">
                    <p className="text-primary">
                      Already have an account? 
                  <NavLink
                  className="nav-link"
                  to="/login"
                  activeClassName="active"
                  >
                  <u>Log in</u>
                  </NavLink>
                  </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?t=st=1736685598~exp=1736689198~hmac=8f8c3098590588a8b28d89bb8d21c22e67880de500dd14dff3c87f4091bbab2e&w=740"
            className="mb-5"
            alt="..."
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignupScreen;
