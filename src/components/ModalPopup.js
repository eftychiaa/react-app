import React, { useState } from "react";
import axios from "axios";
import { Spinner, Alert, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Redirect } from "react-router-dom";

const ModalPopup = (props) => {
  //   const [contacts, setContacts] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState(null);
  //   const history = useHistory();

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    // <div>
    <span>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>The course will be saved</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={() => deleteContact(props)}>
              Yes
            </Button> */}
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
          {/* <Redirect to="/" />; */}
        </Modal.Footer>
      </Modal>
      <Redirect to="/" />
    </span>
  );
};

export default ModalPopup;
