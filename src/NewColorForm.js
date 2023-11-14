import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewColorForm = ({ onAddColor }) => {
  const [name, setName] = useState('');
  const [hex, setHex] = useState('#ffffff');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newColor = {
      id: Date.now().toString(),
      name,
      hex,
    };

    onAddColor(newColor);

    navigate('/colors');
  };

  return (
    <div>
      <h2>Add a New Color</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Color Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Color Hex:
          <input type="color" value={hex} onChange={(e) => setHex(e.target.value)} />
        </label>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default NewColorForm;
