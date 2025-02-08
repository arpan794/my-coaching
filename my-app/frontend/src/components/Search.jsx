import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Search() {
  const navigate = useNavigate();
   
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);  // React Router v6 uses `navigate` instead of `history.push`
    } else {
      navigate("/products");
    }
  };



return (
    <div>
      <form class="d-flex" onSubmit={searchSubmitHandler}>
    <input
      class="form-control me-2 border-primary-subtle border-5 "
      type="text"
      placeholder="Search a product..."
      aria-label="Search"
      onChange = {(e) => setKeyword(e.target.value)}
    />
    <button class="btn btn-primary" type="submit">
      Search
    </button>
  </form>
  </div>
  )
}

export default Search