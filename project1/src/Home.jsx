import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUsers } from './UserContext.jsx';

const Home = () => {

    const { users, setUsers } = useUsers();

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Registered Users</h1>
      {users.map((user, index) => (
        <div key={index} className="user-card">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <button onClick={() => deleteUser(index)}>Delete User</button>
        </div>
      ))}
      <Link to="/add-user">
        <button className="add-user-btn">Add User</button>
      </Link>
    </div>
  );
};

export default Home;