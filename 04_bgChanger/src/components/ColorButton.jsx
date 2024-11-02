// src/components/ColorButton.jsx
import PropTypes from 'prop-types';

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
ColorButton.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ColorButton;
