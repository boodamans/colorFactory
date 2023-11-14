import React from 'react';
import { useParams } from 'react-router-dom';

const ColorDetails = ({ colors }) => {
  const { colorId } = useParams();
  const color = colors.find((c) => c.id === colorId);


  return (
    <div>
      <h2>{color.name}</h2>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color.hex,
        }}
      ></div>
      <p>Hex: {color.hex}</p>
    </div>
  );
};

export default ColorDetails;
