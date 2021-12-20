/**
 * @file YinYang.js
 * @see https://codepen.io/moritao/pen/BaBwwaz
 */
import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './YinYang.module.css';

const YinYang = ({
  tagName: Tag = 'div',
  className = '',
  variant = 'default',
  children = '',
  width = '2.5rem',
}) => {
  return (
    <Tag
      className={`${styles.yin_yang} ${
        styles[`yin_yang__${variant}`]
      } yinyang ${className}`}
    >
      {children}
      <style jsx>
        {`
          .yinyang {
            width: 10rem;
            height: 10rem;
            background: radial-gradient(
                  #000 0.5em,
                  #fff 0.5em,
                  #fff 2.5em,
                  transparent 2.5em
                )
                center top / 50% 50% no-repeat,
              radial-gradient(
                  #fff 0.5em,
                  #000 0.5em,
                  #000 2.5em,
                  transparent 2.5em
                )
                center bottom / 50% 50% no-repeat,
              linear-gradient(90deg, #fff 50%, #000 50%);
            border-radius: 50%;
            box-shadow: 0 0 0 0.1em #000;
          }
        `}
      </style>
    </Tag>
  );
};

YinYang.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default YinYang;
