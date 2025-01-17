import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="d-flex align-items-end ">
      <div className="container-fluid bg-info text-white py-4">
        <div className="row">
          <div className="col-md-4 text-dark">
            <h5>About Us</h5>
            <p>We provide expert coaching to help you achieve your personal and professional goals. Our experienced coaches are dedicated to guiding you on your journey to success.</p>
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-4 text-dark">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/home" className="text-dark">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-dark">About</NavLink>
              </li>
              <li>
                <NavLink to="/course" className="text-dark">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-dark">Contact</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-md-3 text-dark">
            <h5>Contact Us</h5>
            <p><i className="bi bi-geo-alt"></i> 123 Coaching St, City, Country</p>
            <p><i className="bi bi-phone"></i> +123 456 7890</p>
            <p><i className="bi bi-envelope"></i> info@coachingwebsite.com</p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col text-center">
            <NavLink to="https://www.facebook.com" className="text-dark mx-3">
              <i className="bi bi-facebook"></i> Facebook
            </NavLink>
            <NavLink to="https://twitter.com" className="text-dark mx-3">
              <i className="bi bi-twitter"></i> Twitter
            </NavLink>
            <NavLink to="https://www.linkedin.com" className="text-dark mx-3">
              <i className="bi bi-linkedin"></i> LinkedIn
            </NavLink>
            <NavLink to="https://www.instagram.com" className="text-dark mx-3">
              <i className="bi bi-instagram"></i> Instagram
            </NavLink>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col text-center text-dark">
            <p>&copy; 2025 Coaching Website. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
