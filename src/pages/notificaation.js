import React from "react";
import Card from "antd/es/card/Card";
import Navbard from "../components/navbar";
import logo from './pdfe.png';
import './notification.css'
import { Sidebar } from "react-admin";
export default function Notification(){
    return(
        <>
        <Navbard/>
         <Card>
        <img src={logo} className="profi"/>
          <div className="numm">NUMERO :1</div><br></br>
          <div className="emaill">EMAIL :ily123@gmail.com</div><br></br>
          <div className="genree">GNRE:male</div><br></br>
          <div className="objectif">OBJECTIF : to bee good</div><br></br>
         </Card>
        </>
    )
}