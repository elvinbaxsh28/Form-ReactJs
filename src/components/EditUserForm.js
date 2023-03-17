import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import UserList from "./UserList";


const EditUserForm = () => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
      };

    const handleCloseModal = () => {
        setShowModal(false);
      };
  return (
    <div>

    <button onClick={handleShowModal} >Edit User</button>
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>LastName</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          {/* <UserList/> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={handleCloseModal}>Cancel</button>
        <button onClick={handleCloseModal}>Save</button>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default EditUserForm;
