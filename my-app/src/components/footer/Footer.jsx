import React from 'react'


function Footer() {
  return (
  
<div class="d-flex align-items-end"> 
  <div class="container-fluid bg-info text-white py-4">
    <div class="row ">
      
      <div class="col-md-4 text-dark">
        <h5>About Us</h5>
        <p>We provide expert coaching to help you achieve your personal and professional goals. Our experienced coaches are dedicated to guiding you on your journey to success.</p>
      </div>

      <div class="col-md-1">

      </div>
      
      
      <div class="col-md-4 text-dark ">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-dark">Home</a></li>
          <li><a href="#" class="text-dark">About</a></li>
          <li><a href="#" class="text-dark">Services</a></li>
          <li><a href="#" class="text-dark">Contact</a></li>
        </ul>
      </div>
      
      
      <div class="col-md-3 text-dark">
        <h5>Contact Us</h5>
        <p><i class="bi bi-geo-alt"></i> 123 Coaching St, City, Country</p>
        <p><i class="bi bi-phone"></i> +123 456 7890</p>
        <p><i class="bi bi-envelope"></i> info@coachingwebsite.com</p>
      </div>
    </div>

    <div class="row mt-3">
      
      <div class="col text-center">
        <a href="#" class="text-dark mx-3"><i class="bi bi-facebook"></i>Facebook</a>
        <a href="#" class="text-dark mx-3"><i class="bi bi-twitter"></i>twitter</a>
        <a href="#" class="text-dark mx-3"><i class="bi bi-linkedin"></i>linkedin</a>
        <a href="#" class="text-dark mx-3"><i class="bi bi-instagram"></i>instagram</a>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col text-center text-dark">
        <p>&copy; 2025 Coaching Website. All Rights Reserved.</p>
      </div>
    </div>
  </div>
  </div>

  )
}

export default Footer