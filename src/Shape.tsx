// Shape.tsx
import React from 'react';

// Define the type for the shape prop
type ShapeType = 'circle' | 'square' | 'star';

// Define the props interface
export interface ShapeProps {
  shape: ShapeType;
  text: string;
  color?: string; // Optional color prop
}

// Define styles as objects
const baseStyles: Record<ShapeType, React.CSSProperties> = {
  circle: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    color: 'black',
    position: 'relative',
  },
  square: {
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    color: 'white',
    position: 'relative',
  },
  star: {
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
};

const Shape: React.FC<ShapeProps> = ({ shape, text, color = 'gray' }) => {
  // Get the base style for the shape
  const baseStyle = baseStyles[shape];

  // Combine base style with color
  const shapeStyle: React.CSSProperties = {
    ...baseStyle,
    backgroundColor: shape !== 'star' ? color : 'transparent',
  };

  // Render the shape
  if (shape === 'star') {
    return (
      <div style={shapeStyle}>
        <svg
          viewBox="0 0 24 24"
          width="100"
          height="100"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.8-5.4 2.8 1-6-4.4-4.3 6.1-.9z" />
        </svg>
        <span style={{ position: 'absolute', color: 'black' }}>{text}</span>
      </div>
    );
  }

  return <div style={shapeStyle}>{text}</div>;
};

export default Shape;

