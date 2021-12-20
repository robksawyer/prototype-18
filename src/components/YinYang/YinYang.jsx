/**
 * @file YinYang.js
 * @see https://codepen.io/moritao/pen/BaBwwaz
 */
import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './YinYang.module.css';
import { useMousePosition } from '@/hooks/useMousePosition';
import { useLayoutEffect } from '@/hooks/useIsoLayoutEffect';

const YinYang = ({
  tagName: Tag = 'div',
  className = 'absolute pointer-events-none z-1 animate-spin',
  variant = 'default',
}) => {
  const ref = React.useRef();
  const { x, y } = useMousePosition();
  const [size, setSize] = React.useState();

  useLayoutEffect(() => {
    if (!size && ref?.current) {
      setSize({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      });
    }
  }, [ref, size]);

  return (
    <Tag
      className={`${styles.yin_yang} ${
        styles[`yin_yang__${variant}`]
      } yinyang ${className}`}
      ref={ref}
      style={{
        top: `calc(${y}px - ${size?.height ? size.height / 2 : 0}px)`,
        left: `calc(${x}px - ${size?.width ? size.width / 2 : 0}px)`,
      }}
    >
      <style jsx>{`
        .yinyang {
          width: calc(10rem / 3);
          height: calc(10rem / 3);
          background: radial-gradient(
                #000 calc(0.5em / 3),
                #fff calc(0.5em / 3),
                #fff calc(2.5em / 3),
                transparent calc(2.5em / 3)
              )
              center top / 50% 50% no-repeat,
            radial-gradient(
                #fff calc(0.5em / 3),
                #000 calc(0.5em / 3),
                #000 calc(2.5em / 3),
                transparent calc(2.5em / 3)
              )
              center bottom / 50% 50% no-repeat,
            linear-gradient(90deg, #fff 50%, #000 50%);
          border-radius: 50%;
          box-shadow: 0 0 0 0.1em #000;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          cursor: none;
        }

        html *,
        body * {
          cursor: none;
        }
      `}</style>
    </Tag>
  );
};

YinYang.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
};

export default YinYang;
