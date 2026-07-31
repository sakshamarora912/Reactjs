import React, { createContext, useContext, useState } from 'react';
const context = createContext();

export const Provider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
  return (
    <context.Provider value={{ username,setUsername,password,setPassword,email,setEmail}}>
      {children}
    </context.Provider>
  );
};

export const useData = () => useContext(context);
