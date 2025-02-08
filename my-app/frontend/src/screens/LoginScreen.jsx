import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Link, Navigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../actions/userAction.jsx";



function LoginScreen() {
  const dispatch = useDispatch();

  const { error,loading,isAuthenticated } = useSelector((state) => state.user);

  const [loginEmail,setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] = useState("")

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail,loginPassword));
    
  }

  useEffect(() => {
    if (error){
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated){
      Navigate("/account")
    }
  },[dispatch,error,alert,Navigate,isAuthenticated])


  return (
    <div className="row">
      <div className="col-6">
        <div className="d-flex mt-5">
          <div className="container w-50 mt-5 bg-light ">
            <div className="login-container ">
              <div className="row bg-primary rounded-top-3">
                <h2 className="text-center mb-4 mt-3 text-white ">Login</h2>
              </div>

              <form className="loginForm" onSubmit={loginSubmit}>
                <div className="form-group mb-3 ">
                  <label for="email">Email address:</label>
                  <input
                    type="email"
                    className="form-control"
                    value={loginEmail}
                    placeholder="Enter email"
                    required
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    value={loginPassword}
                    placeholder="Enter password"
                    required
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>

                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label className="form-check-label" for="rememberMe">
                    Remember me
                  </label>
                </div>
                <div className="text-center">
                  <button type="submit" value="Login" className="btn btn-primary btn-block">
                    Login
                  </button>
                </div>

                <div className="text-center mt-3">
                  <Link to="/password/forgot">Forgot Password ?</Link>
                </div>
                <div className="text-center mt-3">
                  <p className="text-primary">
                    
                    Don't have an account? 
                  <NavLink
                  className="nav-link"
                  to="/signup"
                  activeclass="active"
                  >
                  <u>Sign up</u>
                  </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 mb-5">
        <img
          src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?t=st=1736680311~exp=1736683911~hmac=869445a36a57f209780a0953bbc5de2264ee349e7b42d972a610f651b3255a4c&w=740"
          className="card-img-top"
          alt="..."
        />
      </div>
      <Footer />
    </div>
  );
}

export default LoginScreen;
