import React, { useState } from 'react';
import './indexe.css';
import { Link } from 'react-router-dom';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,


}from "react-icons/fa";
import { BsFillCaretRightSquareFill  ,   BsFillFileEarmarkDiffFill } from "react-icons/bs";

const Sidebare = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
         
            <Link to='/' className='nav-logo'>
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>Homepage</span>
            </Link>
            <Link to='/articles' className='nav-logo'>
              <i><FaTh/></i>
              <span className='nav-logo-name'>articles</span>
            </Link>

            <div className='nav-list'>
              <Link to='/utilesateur' className='nav-link active'>
                <i><FaUserAlt/></i>
                <span className='nav-link-name'>liste utilisatuer</span>
              </Link>
              <Link to='/ajouter' className='nav-link'>
                <i > <FaRegChartBar/></i>
                <span className='nav-link-name'>ajouter les articles</span>
              </Link>
              <Link to='/videos' className='nav-link'>
                <i ><BsFillCaretRightSquareFill/></i>
                <span className='nav-link-name'>Ajouter videos</span>
              </Link>
              <Link to='/boock' className='nav-link'>
                <i ><BsFillFileEarmarkDiffFill/></i>
                <span className='nav-link-name'>ajouter livres</span>
              </Link>
              <Link to='/notification' className='nav-link'>
                <i ><FaCommentAlt/></i>
                <span className='nav-link-name'>notification</span>
              </Link>
            </div>
          </div>

          <Link to='/logout' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>

    </main>
  );
};

export default Sidebare;
