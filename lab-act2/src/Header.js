import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';
import './App.css';

const Header = () => {
  return (
    <header className="navbar navbar-dark justify-content-between">
      <span className="navbar-brand"></span>
      <div className="d-flex mt-3 nav-items">
        <NavItem text="Gmail" />
        <NavItem text="Images" />
        <NavItem image="/download2.png" />
        <ProfileIcon />
      </div>
    </header>
  );
};

function NavItem (props) {
  return (
    <span className="nav-item nav-link text-white" style={{ marginRight: '10px' }}>
      {props.text} 
      {props.image && <img src={props.image} style={{ width: '30px', height: 'auto' }} alt={props.text} />}
    </span>
  );
};  

const ProfileIcon = () => {
  return (
    <div className="nav-item" style={{ marginRight: '10px' }}>
      <div className="profile-icon rounded-circle d-flex align-items-center justify-content-center">
        <img src="/prof.png" alt="profile" style={{ width: '30px', height: 'auto' }}></img>
      </div>
    </div>
  );
};

export default Header;
