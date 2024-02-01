// SearchBar.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const url = `https://www.google.com/search?q=${query}`;
    window.open(url);
  };

  const handleDoodle = () =>{
  window.location.href = 'https://doodles.google/';
    
  }

  return (
    <section>
      <div className="main">
        <img
          className='Logo'
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
          alt="Google Logo"
        />
        <div className="searchBx">
          <input
            type="text"
            name=""
            className="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="icons">
            {/* Replace the image paths with correct ones */}
            <div>
              <img src="/search.png" alt="search" />
            </div>
            <div>
              <img src="/mic.png" alt="search" />
              <img className="hotdog"src="/googlelens.png" alt="camera"/>
            </div>
          </div>
          <div className="button">
            <button className="searchBtn" onClick={handleSearch}>
              Google Search
            </button>
            <button className="feeling" onClick={handleDoodle}>I'm Feeling Lucky</button>
          </div>
          <div className='text'>
            <span>Google offered in: 
              <a href='#'>Filipino </a> 
              <a href='#'>Cebuano</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
