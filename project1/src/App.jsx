import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import AddUser from "./AddUser.jsx";
import "./Styles.css";
import { UserProvider } from './UserContext.jsx';

function App() {
  return (
    <Router>
      <UserProvider>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/add-user">Add User</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </div>
      </UserProvider>
    </Router>
  );
}

export default App;