import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillTrash3Fill,BsFillPencilFill } from "react-icons/bs";
import './articles.css'
import axios from "axios";
import Sidebare from "../components/Sidebare/Sidebare";
import Navbard from "../components/navbar";
import Sidebar from "../components/Sidebar";

function Articles()
{ 
  const[product, setProduct]= useState([]);
  const [message, setMessage]= useState('');

  useEffect( ()=>{
  
    getProduct();
  },[]);
  const getProduct= ()=>{
    fetch("http://127.0.0.1/admiin/admin/apie/videos.php")
    .then(res=>{ return res.json()})
    .then(data=>{ setProduct(data)})
    .catch(error=>{ console.log(error)});
}
  
const deleteCorrespondance = (id) => {
  axios.delete(`http://127.0.0.1/admiin/admin/api2/${id}/delete`).then(function(response){
    alert('do want')
    getProduct();
});
}

 
  
    return(
      <>
      <Navbard/>
       <table className="tablee table-bordered" >
                                <thead>
                                  <div>{message}</div>
                                <tr>
                             
                                <th scope="col">video</th>
                                <th scope="col">numero</th>
                                <th scope="col">titre </th>
                                <th scope="col">action</th>
                              
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        product.map((pdata, index)=>(
                                            <tr key={index}>
                                            <td> <video className="vid" src={`http://127.0.0.1/admiin/admin/images/${pdata.pimage}`} />  </td>
                                            <td width={130}>{index+1 }</td>
                                           <td width={130}>{pdata.ptitle } </td>
                                            <td>
                                                {/* <Link to="/editearticles" className="btn btn-success mx-2"><BsFillPencilFill/></Link> */}
                                             <button  onClick={ ()=>deleteCorrespondance(pdata.id)} className="btn btn-danger"><BsFillTrash3Fill/></button>
                                            </td>
                                            </tr>
                                        ))
                                    }
                              
                                                               
                                </tbody>
                                </table>  
      </>
    );
}
export default Articles;