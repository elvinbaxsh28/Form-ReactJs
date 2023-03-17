import React from "react";
import EditUserForm from "./EditUserForm"; 

const UserList = ({users,  handleEditUser, handleDeleteUser}) => {
  return (
    <div>
      {users.map((user) => (
        <EditUserForm key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
