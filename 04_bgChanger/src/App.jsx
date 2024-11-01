import { useState } from 'react';
import './App.css';
import ColorButton from './components/ColorButton';

function App() {
  // Initialize color state from localStorage, or default to "olive" if not set
  const [color, setColor] = useState(() => localStorage.getItem('backgroundColor') || 'olive');

  // Array of color options
  const colors = ["red", "green", "blue", "orange", "purple", "yellow", "teal", "pink", "brown", "gray"];

  // Function to handle color change and save to localStorage
  const handleChangeColor = (newColor) => {
    setColor(newColor);
    localStorage.setItem('backgroundColor', newColor);
  };


  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((color) => (
            <ColorButton key={color} color={color} label={color.charAt(0).toUpperCase() + color.slice(1)} onClick={() => handleChangeColor(color)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
