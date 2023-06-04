import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillTrash3Fill,BsFillPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Sidebare from "../components/Sidebare/Sidebare";
import Navbard from "../components/navbar";
import pfd from './pdf.png'
import './listliv.css'
import Sidebar from "../components/Sidebar";



import axios from "axios";

function Listeliv()
{ 
  const navigate= useNavigate();
  const[product, setProduct]= useState([]);
  const [message, setMessage]= useState('');

  useEffect( ()=>{
  
    getProduct();
  },[]);
  const getProduct= ()=>{
    fetch("http://127.0.0.1/admiin/admin/apie%20liv/livres.php")
    .then(res=>{ return res.json()})
    .then(data=>{ setProduct(data)})
    .catch(error=>{ console.log(error)});
    console.log(product.ptitle)
    
}
  
//   const deleteCorrespondance = async(id) => {
//     const res= await axios.delete("http://127.0.0.1/admiin/admin/apie%20liv/livres.php"+id);
//     setMessage(res.data.success);
//     getProduct()

// }
const deleteCorrespondance = (id) => {
  axios.delete(`http://127.0.0.1/admiin/admin/api2/${id}/delete`).then(function(response){
    alert('do want')
    getProduct();
});
}

 
  
    return(
      <>
      <div><Navbard/></div>
       <table className="tablee table-bordered" id="tab" >
                                <thead>
                                  <div>{message}</div>
                                
                                </thead>
                                <tbody>
                                  <h1>liste livres</h1>
                                    {
                                        product.map((pdata, index)=>(
                                            <tr key={index}  width={590} >
                                            <td className="td"> <a href={`http://127.0.0.1/admiin/admin/boock/${pdata.pfile}`} height={50} width={590}><img src={pfd} /></a> {pdata.ptitle } </td>
                                           
                                         
                                            <td>
                                                {/* <Link to="/editearticles" className="btn btn-success mx-2"><BsFillPencilFill/></Link> */}
                                             <button  onClick={ ()=>deleteCorrespondance (pdata.id)} className="btn btn-danger"><BsFillTrash3Fill/></button>
                                            </td>
                                            </tr>
                                        ))
                                    }
                              
                                                               
                                </tbody>
                                </table>  
      </>
    );
}
export default Listeliv;