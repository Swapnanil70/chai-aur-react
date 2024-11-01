// src/components/ColorButton.jsx
import React from 'react';

function ColorButton({ color, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  );
}

export default ColorButton;
