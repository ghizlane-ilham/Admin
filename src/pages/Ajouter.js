import React from "react";
import './ajouter.css';
import  { useState } from "react";
import { Card } from "antd";
import '../index.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbard from "../components/navbar";
import Sidebar from "../components/Sidebar";

export default function Ajouter() {

  const [user, setUser] = useState([]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser(values => ({...values, [name]: value}));
    console.log(user)
}
const handleSubmit = (event) => {

  event.preventDefault();

    axios.post('http://127.0.0.1/admiin/admin/api/', user).then(function(response){
      console.log(user);
      alert('bien ajouter')
   


  })}
    return(
      <>
      <div> <Navbard/></div>
      <React.Fragment>
        
        <div className="">
       
       
          {/* <select>
            <option>Articles</option>
            <option>vedios</option>
            <option>liveres</option>
          </select> */}
        <body className="bodye">
       <h1 className="titleart">  ajouter Articles</h1>
      
      <form  onSubmit={handleSubmit}  >
        <div className="inputs_containerart">
       
        <label className="labl"> titre </label>
         <input
            type="text"
            placeholder="titre"
            name="titre"
            onChange={handleChange}
           
          />
         
        <label className="labl">sujet</label>
          <textarea
            type="text"
            rows={5}
            placeholder="sujet"
            name="sujet"
            onChange={handleChange}
            className="inpuet"
          
        
          />
        
          
        </div>
        <input type="submit" value=" ISend" className="login_buttont" />
      </form>
     
  
   
   
        </body>
       
        </div>
        </React.Fragment>
        </>
    )
    
}