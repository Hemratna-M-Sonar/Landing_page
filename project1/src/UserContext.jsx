import React, { useState, createContext, useContext } from "react";

const UserContext = createContext();

export const useUsers = () => {
    return useContext(UserContext);
  };

export const UserProvider = ({ children }) => {
const [users, setUsers] = useState([
    { name: 'User1', age: 25, address: '123 street, Mumbai' },
    { name: 'User2', age: 30, address: '456 street, Delhi' },
]);

return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );

};