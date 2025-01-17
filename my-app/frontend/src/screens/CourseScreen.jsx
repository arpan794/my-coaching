import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

function CourseScreen() {
  return (
    <>
      <div className="d-flex justify-content-evenly">
        <div className="container-fluid text-center mt-5">
          <div className="row align-items-start mt-5">
            <div className="col border bg-light">
              <h1 className="text-primary"><strong>JAVA DEVELOPMENT COURSE</strong></h1>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="container mt-5 g-0">
          <div className="card bg-light">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://picsum.photos/seed/picsum/400/300" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
              <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis natus nihil, a officiis fugiat quasi tempora reprehenderit illo, quae sint eligendi corrupti nobis, praesentium hic iure facilis debitis eveniet ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis beatae perferendis perspiciatis, fugit nobis molestiae distinctio officiis iste. Quidem est pariatur incidunt explicabo accusantium ad iusto unde consequuntur perferendis voluptatem, fugiat impedit deserunt veniam, alias rem dolores. Ullam laudantium voluptate nam totam hic, exercitationem enim dolorum aut ipsa, sapiente iure.</h6>
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
                <img src="https://picsum.photos/seed/picsum/400/300" className="img-fluid" alt="..." />
              </div>
              <h4><p>Faizul Haque</p></h4>
              <h5><p>Mentor | Java | Spring</p></h5>

              <h6>Faizul Haque is a seasoned educator and practitioner specializing in Java backend development with extensive experience in full-stack training. With a strong academic background and hands-on expertise, he has been dedicated to teaching and mentoring aspiring developers in Java, Spring Boot, and related technologies. Faizul holds a Master’s degree in Computer Applications and is pursuing a Ph.D. in Computer Science, reflecting his commitment to continuous learning and innovation.

                Over his professional journey, he has worked as an Assistant Professor, freelance trainer, and industry expert, delivering comprehensive training programs. Faizul has guided students and professionals through advanced Java backend development, database management, and software project management. His teaching approach emphasizes practical applications, encouraging learners to excel in building robust, scalable backend systems using modern tools and frameworks.

                Faizul's mentorship is backed by his rich portfolio of projects, including full-stack solutions using Spring Boot, Angular, and Hibernate. His passion for fostering technical proficiency and his ability to simplify complex concepts make him an inspiring guide for those aspiring to thrive in the dynamic field of software development.
              </h6>
              <p>Associated Batches:</p>
              <p>JBDL 80</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default CourseScreen;
