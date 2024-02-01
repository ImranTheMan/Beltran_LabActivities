import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-column align-items-center flex-grow-1 logo">
        <SearchBar/>
      </div>
      <Footer className="fixed-bottom" />
    </div>
  );
}

export default App;

