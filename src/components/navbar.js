import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbard.css";

const Navbard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
   
      <div className={`nav-items ${isOpen && "open"}`}>
     

          <Link  className="a"
        to="/articles">liste videos</Link>
        
        <Link  className="a"
        to="/utilesateur"> liste utilisatuer </Link>
             <Link  className="a"
        to="/livres"> liste livres </Link>
        
        <Link className="a"
        to="/ajouter">   Ajouter les articles
        </Link>
        <Link className="a"
        to="/videos">Ajouter videos</Link>
           <Link className="a"
        to="/boock">Ajouter livres</Link>
                   {/* <Link className="a"
        to="/notification"> notification</Link> */}
        <Link to='/' className='a' id="log">
           
            <span className='a'>Logout</span>
            <i className='fas fa-sign-out nav-link-icon'></i>
          </Link>
        
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbard;





