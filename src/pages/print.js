 
 
import React from "react";
import ReactToPrint from "react-to-print";
import Liste from "./listeUte";

 
 
 export default class Example extends React.Component {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => <a href="#">Print this out!</a>}
            content={() => this.componentRef}
          />
          <Liste ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }