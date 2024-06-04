// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ItemProvider } from './contexts/ItemContext';
import ItemInput from './components/ItemInput';
import ItemList from './components/ItemList';
import './App.css'; // App.css 임포트

const App = () => {
  return (
    <ItemProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ItemInput />} />
          <Route path="/items" element={<ItemList />} />
        </Routes>
      </Router>
    </ItemProvider>
  );
};

export default App;
