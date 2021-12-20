/**
 * useMousePosition
 */
import * as React from 'react';

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });

  const updateMousePosition = ev => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};
