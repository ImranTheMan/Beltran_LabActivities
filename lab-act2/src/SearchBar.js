import React from 'react';
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="container">
      <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="form">
            <i className="fa fa-search"></i>
            <input type="text" className="form-control form-input" placeholder="Search anything..." />
            <span className="left-pan"><i className="fa fa-microphone"></i></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
