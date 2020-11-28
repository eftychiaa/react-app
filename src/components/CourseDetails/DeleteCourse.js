import React, { useState } from "react";
import axios from "axios";
import { Spinner, Alert, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import TableApp from "../Homepage/TableApp";



const DeleteCourse = (props) => {
  //   const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/courses/${props.id}`);

      history.push("/");

      console.log(id);
    } catch (err) {
      console.log(err);
    }
    
  };

  if (error) {
    return <Alert variant="warning">{error.message}</Alert>;
  }

  if (isLoading) {
    return <Spinner animation="border" size="lg" />;
  }

  return (
    // <div>
    <span>
      <>
        <Button
          style={{ marginLeft: 10 }}
          variant="danger"
          onClick={handleShow}
        >
          Delete
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you really want to delete this course?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => deleteContact(props)}>
              Yes
            </Button>
            <Button variant="primary" onClick={handleClose}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </span>
  );
};

export default DeleteCourse;
