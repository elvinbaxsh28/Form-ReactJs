// import React, { useRef, useState, useEffect } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import Swal from "sweetalert2";
// import "../App";

// const UserForm = (props) => {
//   const { color } = props;

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [users, setUsers] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [modalUserId, setModalUserId] = useState(null);
//   const inputRef = useRef(null);

//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, []);

//   useEffect(() => {
//     const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
//     setUsers(storedUsers);
//   }, []);

//   const handleAddUser = () => {
//     if (firstName.trim() === "" || lastName.trim() === "") {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Bos saxlamaq olmaz!",
//         footer: '<a href="">Why do I have this issue?</a>',
//       });
//       return;
//     }

//     const newUser = {
//       firstName,
//       lastName,
//       id: Date.now(),
//     };
//     const updatedUsers = [...users, newUser];
//     localStorage.setItem("users", JSON.stringify(updatedUsers));
//     setUsers(updatedUsers);
//     setFirstName("");
//     setLastName("");
//   };

//   const handleDeleteUser = (id) => {
//     const filteredUsers = users.filter((user) => user.id !== id);
//     localStorage.setItem("users", JSON.stringify(filteredUsers));
//     setUsers(filteredUsers);
//   };

//   const handleEditUser = (id) => {
//     const editedUser = users.find((user) => user.id === id);
//     setFirstName(editedUser.firstName);
//     setLastName(editedUser.lastName);
//     handleDeleteUser(id);
//     setShowModal(true);
//     setModalUserId(id);
//   };

//   const handleSaveUser = () => {
//     const editedUsers = users.map((user) => {
//       if (user.id === modalUserId) {
//         return {
//           ...user,
//           firstName,
//           lastName,
//         };
//       } else {
//         return user;
//       }
//     });
//     localStorage.setItem("users", JSON.stringify(editedUsers));
//     setUsers(editedUsers);
//     setShowModal(false);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setModalUserId(null);
//     setFirstName("");
//     setLastName("");
//   };

//   return (
//     <div
//       style={{
//         width: "30rem",
//       }}
//     >
//       <form
//         style={{
//           borderRadius: "30px",
//         }}
//       >
//         <label className="h4">
//           First Name:
//           <input
//             className="FormC"
//             style={{
//               color,
//             }}
//             type="text"
//             value={firstName}
//             ref={inputRef}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </label>
//         <label className="h4">
//           Last Name:
//           <input
//             className="FormC"
//             style={{
//               color,
//             }}
//             type="text"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </label>
//         <button
//           type="button"
//           className="btn btn-info text-white d-block"
//           onClick={handleAddUser}
//         >
//           Add User
//         </button>
//       </form>

//       <div className="users mt-2 ">
//         <h4>Users:</h4>

//         <table className="table border border-dark table-info">
//           <thead>
//             <tr className="border border-dark">
//               <th className="border border-dark">First Name</th>
//               <th className="border border-dark">Last Name</th>
//               <th className="border border-dark">Edit</th>
//               <th className="border border-dark">Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td  style={{ color }}>{user.firstName}</td>
//                 <td style={{ color }} className="border border-dark">{user.lastName}</td>
//                 <td className="border border-dark">
//                   <button
//                     className="btn btn-warning text-white"
//                     onClick={() => handleEditUser(user.id)}
//                   >
//                     Edit
//                   </button>
//                 </td>
//                 <td className="border border-dark">
//                   <button
//                     className="btn btn-danger text-white"
//                     onClick={() => handleDeleteUser(user.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit User</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formBasicName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 placeholder="Enter name"
//               />
//             </Form.Group>
//             <Form.Group controlId="formBasicName">
//               <Form.Label>LastName</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 placeholder="Enter lastname"
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSaveUser}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default UserForm;


import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import Swal from "sweetalert2";

function UserForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(storedUsers);
  }, []);

  const handleSubmit = (event) => {
    

    event.preventDefault();
    const newUser = { firstName, lastName };
    setUsers([...users, newUser]);
    setFirstName('');
    setLastName('');
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
  };

  const handleDelete = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
  };

  const handleEdit = (index) => {
    const userToEdit = users[index];
    setFirstName(userToEdit.firstName);
    setLastName(userToEdit.lastName);
    setSelectedUserIndex(index);
    setShowModal(true);
  };

  const handleSave = () => {
    const newUsers = [...users];
    newUsers[selectedUserIndex] = { firstName, lastName };
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
    setSelectedUserIndex(null);
    setShowModal(false);
  };

  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Add User</Button>
  </Form>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>
            <Button variant="info" onClick={() => handleEdit(index)}>Edit</Button>
          </td>
          <td>
            <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
  <Modal show={showModal} onHide={() => setShowModal(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Edit User</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </Form.Group>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
      <Button variant="primary" onClick={handleSave}>Save Changes</Button>
    </Modal.Footer>
  </Modal>
</>
);
}

export default UserForm;
