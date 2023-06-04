import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebare from "../components/Sidebare/Sidebare";
import '../index.css';
import './ajouter.css';
import { Card } from "antd";
import Navbard from "../components/navbar";
import { Sidebar } from "react-admin";

function Addproduct()
{  
    const navigate= useNavigate();
    const[ptitle, setPtitle]= useState('');
  
    const[pfile, setPfile]= useState('');
    const[message, setMessage]= useState('');

    const uploadProduct= async()=>{
        const formData= new FormData();
        formData.append('ptitle', ptitle);
       
        formData.append('pfile', pfile);
        const responce= await axios.post("http://127.0.0.1/admiin/admin/apie/videos.php", formData, {
            headers:{'Content-Type':"multipart/form-data"},
        } );

        if(responce.data.success)
        {
            setMessage(responce.data.success);
         
                navigate('/articles');
           

            // setTimeout(()=>{
            //     navigate('/productlist');
            // }, 2000);

        }
    }

    const handleSubmit= async(e)=>{
      e.preventDefault();
      await uploadProduct();

   }
    return(
    <React.Fragment>
      <Navbard/>
        <Card>
           <body className="bodye">
            
              <h1 className="titleart">  ajouter video</h1>
                    <form onSubmit={ handleSubmit}>     
                    <div className="inputs_containerart">      
                 
                    <label  className="labl">Product Title </label>
                
                    <input type="text" className="form-control" onChange={ (e)=>setPtitle(e.target.value)}/>
                  
                 

                  
                    <label  className="labl">Product Image</label>
        
                    <input type="file" className="form-control" onChange={(e)=>setPfile(e.target.files[0])} />
                
 
                    <button type="submit" className="login_buttont">Submit</button>
                    </div>
                   

                    </form>

            
            
      
        </body>
        </Card>
    </React.Fragment>
    
    );
}
export default Addproduct;