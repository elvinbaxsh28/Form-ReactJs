import React, { useState, useEffect } from 'react';

const UserForm = (props) => {
  const {color} = props;
  

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  
  const handleAddUser = () => {
    const newUser = {
      firstName,
      lastName,
      id: Date.now(),
    };
    const updatedUsers = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setFirstName('');
    setLastName('');
  };

  const handleDeleteUser = (id) => {
    const filteredUsers = users.filter(user => user.id !== id);
    localStorage.setItem('users', JSON.stringify(filteredUsers));
    setUsers(filteredUsers);
  };

  const handleEditUser = (id) => {
    const editedUser = users.find(user => user.id === id);
    setFirstName(editedUser.firstName);
    setLastName(editedUser.lastName);
    handleDeleteUser(id);
  };

  return (
    <div>
      <form>
        <label>
          First Name:
          <input style={{ color }} type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input style={{ color }} type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <button type="button" className='btn btn-warning text-white m-1' onClick={handleAddUser}>Add User</button>
      </form>
      <h2>Users:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} style={{ color }}>
            {user.firstName} {user.lastName}
            <button style={{ backgroundColor: color }} className="btn text-white" type="button" onClick={() => handleDeleteUser(user.id)}>Delete</button>
            <button style={{ color }} type="button" className="btn btn-primary text-white" onClick={() => handleEditUser(user.id)}>Edit</button>
          </li>
          
        ))}
        
      </ul>
    </div>
  );
};

export default UserForm;
