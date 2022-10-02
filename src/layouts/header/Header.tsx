import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <header className="header">
         <h1 className="header__logo header-1">FreeData</h1>
         <nav className="header__nav">
            <ul className="header__nav-list">
               <li className="header__nav-item">
                  <Link to="/">Home</Link>
               </li>
               <li className="header__nav-item">
                  <Link to="/about">About</Link>
               </li>
               <li className="header__nav-item">
                  <Link to="/contact">Contact</Link>
               </li>
            </ul>
         </nav>
         <Link to="/form" className="btn">
            Add new
         </Link>
      </header>
   );
};

export default Header;
