import React from "react";
import './list.css';
import  {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BsFillTrash3Fill,BsPersonCircle } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import Example from "./print";
import Sidebare from "../components/Sidebare/Sidebare"
import Sidebar from "../components/Sidebar";

import Navbard from "../components/navbar";



export default function Liste() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[users, setUsers]= useState([]);
    const [message, setMessage]= useState('');

    useEffect( ()=>{
   
      getProduct();
    },[]);
    const getProduct= ()=>{
        axios.get(`http://127.0.0.1/admiin/admin/api%20user/`).then(function(response) {
          
        setUsers(response.data);
        console.log(users)
      })}
  
 
      const deleteCorrespondance = (id) => {
        axios.delete(`http://127.0.0.1/admiin/admin/api%20user/${id}/delete`).then(function(response){
          alert('do you want to delete this user ')
          getProduct();
      });}
    return(
     <body className="boody">
           <Navbard/>
        <div>
         <div class="container table-responsive">
	
	     <div class="table">{ message}
		<div class="table-header">
			<div class="header__item"><a id="name" className="filter__link " href="#">numero</a></div>
			<div class="header__item"><a id="wins" className="filter__link filter__link--number" href="#">email</a></div>
			<div class="header__item"><a id="draws" className="filter__link filter__link--number" href="#">gnre</a></div>
			<div class="header__item"><a id="losses" className="filter__link filter__link--number" href="#">password</a></div>
			<div class="header__item"><a id="total" className="filter__link filter__link--number" href="#">age</a></div>
            <div class="header__item"><a id="total" className="filter__link filter__link--number" href="#">objectif</a></div>
            <div class="header__item"><a id="total" className="filter__link filter__link--number" href="#">action</a></div>
            <div class="header__item"><a id="total" className="filter__link filter__link--number" href="#">profile</a></div>

		</div>
		<div class="table-content">	
  
        {users.map((user) => 
			<div class="table-row"key={user.id }>		
				<div className="table-data">{user.id}</div>
				<div className="table-data">{user.email}</div>
                <div></div>
				<div className="table-data">{user.genre}</div>
				<div className="table-data">{user.password}</div>
				<div className="table-data">{user.age}</div> 
                <div className="table-data">{user.objectif}</div>
                <div className="table-data"> <button  className="btn btn-danger"  onClick={() => deleteCorrespondance( user.id  )}><BsFillTrash3Fill/></button>   </div>
       
              
			</div>
            
        )}
		</div>	
        <button className="impr">imprimer</button>
	</div>
</div>
        </div>
        
        </body>
    )
    
}