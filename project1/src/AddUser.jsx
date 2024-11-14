import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from './UserContext.jsx';

const AddUser = () => {

    const { users, setUsers } = useUsers();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    const newUser = {
      name: name,
      age: age,
      address: address
    }
    setUsers([...users, newUser]);

    // Optionally clear the form inputs after submission
    setName('');
    setAge('');
    setAddress('');

    alert("User added successfully");
    navigate("/");
  };

  return (
    <div className="container adduser">
      <h1>Add New User</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;