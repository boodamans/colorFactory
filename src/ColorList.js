import React from 'react';
import { Link } from 'react-router-dom';

const ColorList = ({ colors }) => {
  return (
    <div>
      <h2>Colors List</h2>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <Link to={`/colors/${color.id}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/colors/new">Add a New Color</Link>
    </div>
  );
};

export default ColorList;
