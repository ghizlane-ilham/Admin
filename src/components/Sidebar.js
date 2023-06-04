import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
  
 
}from "react-icons/fa";
import { BsFillCaretRightSquareFill  ,   BsFillFileEarmarkDiffFill,BsBoxArrowInRight ,BsFilePdf} from "react-icons/bs";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/articles",
            name:"liste videos",
            icon:<BsFillCaretRightSquareFill/>,
          
        },
        {
            path:"/utilesateur",
            name:"liste utilisatuer",
            icon:<FaUserAlt/>
        },
        {
            path:"/livres",
            name:"liste livres",
            icon:<BsFilePdf/>
        },
        {
            path:"/ajouter",
            name:"ajouter les articles",
            icon:<FaRegChartBar/>

        },
        {
            path:"/videos",
            name:"ajouter videos",
            icon:<BsFillCaretRightSquareFill/>
        },
        {
            path:"/boock",
            name:"ajouter livres",
            icon:<BsFillFileEarmarkDiffFill/>
        },
        {
            path:"/notification",
            name:"notification",
            icon:<FaCommentAlt/>
        },
        {
            path:"/",
            name:"Logout",

            icon:<BsBoxArrowInRight/>
        },
        // {
        //     path:"/login",
        //     name:"deconixion",
        //     icon:<BsBoxArrowInLeft/>
        // }
    ]
    return (
        <>
    
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Orgtime</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="texte">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
        </>
    );
};

export default Sidebar;