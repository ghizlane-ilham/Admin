import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import logo from './pdf.png'


export default function InfoModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="nextButton" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose} backdrop='static' keyboard="False">
        <Modal.Header closeButton>
          <Modal.Title>nom prenom</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={logo}/> <br></br> <br></br>age 20</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}