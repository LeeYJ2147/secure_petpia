// src/contexts/ItemContext.js
import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  return (
    <ItemContext.Provider value={{ items, setItems, name, setName }}>
      {children}
    </ItemContext.Provider>
  );
};
