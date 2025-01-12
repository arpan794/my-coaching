import React from 'react'
import Footer from '../../components/footer/Footer'

function LoginScreen() {
  return (
    
    <div class="row g-0">
    <div class="col-6">
    <div class="d-flex mt-5">
    <div class="container w-50 mt-5 bg-light ">
    <div class="login-container ">
     <div class="row bg-primary rounded-top-3">
      <h2 class="text-center mb-4 mt-3 text-white ">Login</h2>
      </div>
      
      
      <form action="#" method="POST">
        <div class="form-group mb-3 mt-4">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email" required />
        </div>

        <div class="form-group mb-2">
          <label for="password">Password:</label>
          <input type="password" class="form-control" id="password" placeholder="Enter password" required />
        </div>

        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="rememberMe" />
          <label class="form-check-label" for="rememberMe">Remember me</label>
        </div>
        <div class="text-center">
        <button type="submit" class="btn btn-primary btn-block">Login</button>
        </div>
        
        <div class="text-center mt-3">
          <a href="#">Forgot password?</a>
        </div>
        <div class="text-center mt-3">
          <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>
      </form>
    </div>
  </div>
  </div>
  </div>
  <div class="col-6 mb-5">
  <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?t=st=1736680311~exp=1736683911~hmac=869445a36a57f209780a0953bbc5de2264ee349e7b42d972a610f651b3255a4c&w=740" class="card-img-top" alt="..."/>
  </div>
  <Footer/>
  </div>
 
  
  )
}

export default LoginScreen