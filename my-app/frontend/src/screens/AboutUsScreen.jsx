import React from 'react'
import Footer from '../components/Footer'

function AboutUsScreen() {
  return (
    <>
    <div class="d-flex">
    <div class="container-fluid text-dark text-center mt-5">
    <div class="row mt-5 bg-light text-primary">
    <h1>Welcome to My-Coach</h1>
    <p>Your journey to personal and professional growth starts here</p>
    </div>

  
  <div class="container py-5">
    <div class="text-center bg-light text-dark rounded">
      <h2 class="section-title">About Us</h2>
      <p class="section-subtitle">We are dedicated to empowering individuals with personalized coaching to unlock their potential.</p>
    </div>

    <div class="container">
    <div class="row mt-5 bg-light overflow-hidden rounded">
      <div class="col-md-6">
        <h3 class="mb-4">Meet Our Founder</h3>
        <p>Our founder, <strong>Faizul Haque</strong>, a passionate educator and experienced mentor, envisioned My Coach as a platform to provide expert coaching in various domains. With over 10 years of experience in the coaching industry, Faizul is committed to helping individuals discover their strengths and achieve their goals.</p>
        <p>He holds a Master’s degree in Computer Applications and is pursuing a Ph.D. in Computer Science. His mission is to bring practical skills and knowledge to the aspiring individuals in the field of technology, business, and personal development.</p>
      </div>
      <div class="col-md-6">
        <img src="https://picsum.photos/500/300?random=1" alt="Founder Image" class="image-fluid"/>
      </div>
    </div>
    </div>
    
    <div class="text-center mt-5 bg-light rounded">
      <h3 class="section-title">Our Mentors</h3>
      <p class="section-subtitle">Our team of highly skilled mentors is dedicated to providing you with the best guidance and support.</p>
    </div>
    <div class="row">
      
      <div class="col-md-4 mb-4">
        <div class="card mentor-card">
          <img src="https://picsum.photos/400/300?random=2" alt="Mentor 1" class="card-img-top"/>
          <div class="card-body bg-light">
            <h5 class="card-title">John Doe</h5>
            <p class="card-text">Specializes in Business Management & Leadership</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 mb-4">
        <div class="card mentor-card">
          <img src="https://picsum.photos/400/300?random=3" alt="Mentor 2" class="card-img-top"/>
          <div class="card-body bg-light">
            <h5 class="card-title">Jane Smith</h5>
            <p class="card-text">Specializes in Personal Development & Life Coaching</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 mb-4">
        <div class="card mentor-card">
          <img src="https://picsum.photos/400/300?random=4" alt="Mentor 3" class="card-img-top"/>
          <div class="card-body bg-light">
            <h5 class="card-title">Sarah Lee</h5>
            <p class="card-text">Specializes in Technology & Software Development</p>
          </div>
        </div>
      </div>
    </div>

   
    <div class="text-center mt-5 bg-light rounded">
      <h3 class="section-title">Our Dedication</h3>
    </div>
    <div class="border bg-light rounded">
      <p>We are committed to providing our clients with the best support and personalized coaching services. Our mission is to guide you towards a future of success, growth, and fulfillment.</p>
    
        <p>At My Coach, we believe that every individual has the potential to achieve greatness. With our expert guidance and personalized coaching plans, we are here to empower you to reach your full potential, whether you are looking to advance your career, improve your personal life, or develop new skills.</p>
        <p>Our mentors are not just teachers, but dedicated partners who are invested in your success. We are here to support you every step of the way, offering a listening ear, actionable advice, and unwavering support.</p>
      </div>
    </div>
  </div>
  </div>
  <Footer/>
  </>
  )
}

export default AboutUsScreen