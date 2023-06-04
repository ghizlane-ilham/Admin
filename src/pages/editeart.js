import axios from "axios";
import React, { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import Sidebare from "../components/Sidebare/Sidebare";
import '../index.css';
import './ajouter.css';
import { Card } from "antd";
import Navbard from "../components/navbar";
import { Sidebar } from "react-admin";

function Profile()
{  
    const[ptitle, setPtitle]= useState('');
    const [user,setUser] = useState("")
    const[product, setProduct]= useState([]);

    const[pfile, setPfile]= useState('');
    const[message, setMessage]= useState('');
    const {id} = useParams();

    useEffect( ()=>{
  
        getProduct();
      },[]);
      const getProduct= ()=>{
        axios.get(`http://127.0.0.1/admiin/admin/api%20user/${id}`).then(function(response) {
            console.log(response.data);
            setProduct(response.data);
            })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
      
          axios.put(`http://127.0.0.1/admiin/admin/api%20user/${id}/edit`, product).then(function(response){
            console.log(product);
            alert('تمت التحديت بنجاح')
          
      
        })
     
     
    }
   

    
    return(
    <>
    <tr><h1>hiiii</h1>
    <td>{product.id} h</td>
   
    </tr>
    </>
   
    
    );
}
export default Profile;