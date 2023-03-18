import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import ShoppingCart from './ShoppingCart'

const MyComponent = () => {
    const [showModal,
        setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button onClick={handleShowModal}>Add User</button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ShoppingCart/>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleCloseModal}>Close</button>
                    <button onClick={handleCloseModal}>Save</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MyComponent;
