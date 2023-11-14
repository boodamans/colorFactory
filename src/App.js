import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails';
import NewColorForm from './NewColorForm';

function App() {
  const [colors, setColors] = useState([
    { id: '1', name: 'Red', hex: '#ff0000' },
    { id: '2', name: 'Green', hex: '#00ff00' },
    { id: '3', name: 'Blue', hex: '#0000ff' },
  ]);

  const handleAddColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/:colorId" element={<ColorDetails colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm onAddColor={handleAddColor} />} />
        <Route path="/" element={<Navigate to="/colors" />} />
      </Routes>
    </Router>
  );
}

export default App;
