import React from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

function HomeScreen() {
  return (
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
              <div class="card">
                <img
                  src="https://picsum.photos/seed/picsum/200/200"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <NavLink to="/course1" class="btn btn-primary">
                    <button class="btn btn-primary" type="submit">
                      Go to Course
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="https://picsum.photos/seed/picsum/200/200"
                  class="card-img-top "
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <NavLink to="/course1" class="btn btn-primary">
                    <button class="btn btn-primary" type="submit">
                      Go to Course
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="https://picsum.photos/seed/picsum/200/200"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <NavLink to="/course1" class="btn btn-primary">
                    <button class="btn btn-primary" type="submit">
                      Go to Course
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-evenly mt-5 mb-5">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="card">
                <img
                  src="https://picsum.photos/seed/picsum/200/200"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <NavLink to="/course1" class="btn btn-primary">
                    <button class="btn btn-primary" type="submit">
                      Go to Course
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="https://picsum.photos/seed/picsum/200/200"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <NavLink to="/course1" class="btn btn-primary">
                    <button class="btn btn-primary" type="submit">
                      Go to Course
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="https://picsum.photos/seed/picsum/200/200"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <NavLink to="/course1" class="btn btn-primary">
                    <button class="btn btn-primary" type="submit">
                      Go to Course
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomeScreen;
