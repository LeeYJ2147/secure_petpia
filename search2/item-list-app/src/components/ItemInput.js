import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate로 변경
import { ItemContext } from '../contexts/ItemContext';
import '../App.css';

const ItemInput = () => {
  const [input, setInput] = useState('');
  const { setName } = useContext(ItemContext);
  const navigate = useNavigate(); // useHistory 대신 useNavigate 사용

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(input);
    navigate('/items'); // useHistory 대신 useNavigate 사용
  };

  return (
    <div>
      <img src="/header.jpg" alt="Header" className="header-img" />
      <form onSubmit={handleSubmit} className="container">
        <label>
          아이템 이름:
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <button type="submit">검색</button>
      </form>
      <img src="/footer.jpg" alt="Footer" className="footer-img" />
    </div>
  );
};

export default ItemInput;
