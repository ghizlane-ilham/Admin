import React from "react";
import { useNavigate } from "react-router-dom";
export default function Deconixion() {
    const navigate = useNavigate();
    return(
        <>
        {navigate('/login')}</>
    )
    
}