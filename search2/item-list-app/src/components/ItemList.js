import React, { useContext, useEffect, useState } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import '../App.css';

const ItemList = () => {
  const { items, setItems, name } = useContext(ItemContext);
  const [filteredItemCount, setFilteredItemCount] = useState(0);

  useEffect(() => {
    if (name) {
      const allItems = [
        { name: '아이템 1', img: 'https://via.placeholder.com/150' },
        { name: '아이템 2', img: 'https://via.placeholder.com/150' },
        { name: '아이템 3', img: 'https://via.placeholder.com/150' },
        { name: '아이템 4', img: 'https://via.placeholder.com/150' },
        { name: '아이템 5', img: 'https://via.placeholder.com/150' },
        { name: '아이템 6', img: 'https://via.placeholder.com/150' },
        { name: '아이템 7', img: 'https://via.placeholder.com/150' },
        { name: '아이템 8', img: 'https://via.placeholder.com/150' },
        { name: '아이템 9', img: 'https://via.placeholder.com/150' },
        { name: '아이템 10', img: 'https://via.placeholder.com/150' },
        { name: '아이템 11', img: 'https://via.placeholder.com/150' },
        { name: '아이템 12', img: 'https://via.placeholder.com/150' },
        { name: '아이템 13', img: 'https://via.placeholder.com/150' },
        { name: '아이템 14', img: 'https://via.placeholder.com/150' },
        { name: '아이템 15', img: 'https://via.placeholder.com/150' },
        { name: '아이템 16', img: 'https://via.placeholder.com/150' },
      ];

      const filteredItems = allItems.filter(item => item.name.includes(name));
      setItems(filteredItems);
      setFilteredItemCount(filteredItems.length);
    }
  }, [name, setItems]);

  return (
    <div>
      <img src="/header.jpg" alt="Header" className="header-img" />
      <div className="container results-container">
        <p>{filteredItemCount} items</p>
        <div className="item-grid">
          {items.map((item, index) => (
            <div key={index} className="item-card">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <img src="/footer.jpg" alt="Footer" className="footer-img" />
    </div>
  );
};

export default ItemList;
