import React from 'react'; 
import { Link } from 'react-router-dom';

import '../App.css'; 

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <Link to="/" className="navbar-brand">Book Store</Link>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/books/new" className="link">Add Book</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  ); 
}

export default Navbar;