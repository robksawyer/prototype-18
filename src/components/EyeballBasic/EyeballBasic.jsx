/**
 * @file EyeballBasic.js
 */
import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './EyeballBasic.module.css';

import { useInterval } from '@/hooks/useInterval';
import { useLayoutEffect } from '@/hooks/useIsoLayoutEffect';

const EyeballBasic = ({
  tagName: Tag = 'div',
  className = '',
  variant = 'default',
}) => {
  const rando = React.useCallback(() => {
    const min = -12;
    const max = 12;

    function Offset(n) {
      return 50 + n;
    }
    return Offset(Math.floor(Math.random() * (max - min + 1) + min));
  }, []);

  const tick = React.useCallback(() => {
    setMouse({
      x: rando(),
      y: rando(),
    });
  }, [rando]);

  const [mouse, setMouse] = React.useState({
    x: rando(),
    y: rando(),
  });

  useInterval(tick, Math.floor(Math.random() * (3000 - 1500 + 1) + 1500));

  useLayoutEffect(() => {
    const handleMouseMove = ev => {
      const map = (value, x1, y1, x2, y2) =>
        ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

      const { x, y } = mouse;
      // var myCenterX = x + 50;
      // var myCenterY = y + 50;
      var lookX = 50 + map(ev.x, 0 + x, 1000 - x, -12, 12);
      var lookY = 50 + map(ev.y, 0 + y, 1000 - y, -12, 12);

      //console.log(lookX + " " + lookY);
      setMouse({
        x: lookX,
        y: lookY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouse]);

  return (
    <Tag
      className={`${styles.eyeball_basic} ${
        styles[`eyeball_basic__${variant}`]
      } ${className}`}
    >
      <svg height="100" width="100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="3"
          fill="white"
        />
        <ellipse
          cx={mouse.x}
          cy={mouse.y}
          rx="20"
          ry="20"
          stroke="black"
          strokeWidth="1"
          fill="red"
        />
        <ellipse
          cx={mouse.x}
          cy={mouse.y}
          rx="10"
          ry="10"
          stroke="black"
          strokeWidth="1"
          fill="black"
        />
        <circle
          cx="42"
          cy="42"
          r="9"
          stroke="white"
          strokeWidth="0"
          fill="white"
          fillOpacity="0.8"
        />
      </svg>
    </Tag>
  );
};

EyeballBasic.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default EyeballBasic;
