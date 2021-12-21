/**
 * @file VinylRecord.js
 * @see https://codepen.io/trumt2015/pen/BaBMvZV
 */
import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './VinylRecord.module.css';

const VinylRecord = ({
  tagName: Tag = 'div',
  className = '',
  variant = 'default',
  children = '',
}) => {
  return (
    <Tag
      className={`${styles.vinyl_record} ${
        styles[`vinyl_record__${variant}`]
      } record-container ${className}`}
    >
      <div className="record"></div>
      <style jsx>{`
        .record-container {
          display: inline-block;
          overflow: hidden;
          width: 400px;
          height: 300px;
          border-radius: 10px;
          box-shadow: 0 6px #99907e;
          background: #b5ac9a;
        }

        .record {
          position: relative;
          margin: 19px auto;
          width: 262px;
          height: 262px;
          border-radius: 50%;
          background: linear-gradient(
                30deg,
                transparent 40%,
                rgba(42, 41, 40, 0.85) 40%
              )
              no-repeat 100% 0,
            linear-gradient(60deg, rgba(42, 41, 40, 0.85) 60%, transparent 60%)
              no-repeat 0 100%,
            repeating-radial-gradient(
              #2a2928,
              #2a2928 4px,
              #ada9a0 5px,
              #2a2928 6px
            );
          background-size: 50% 100%, 100% 50%, 100% 100%;
        }

        .record:after {
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -35px;
          border: solid 1px #d9a388;
          width: 68px;
          height: 68px;
          border-radius: 50%;
          box-shadow: 0 0 0 4px #da5b33, inset 0 0 0 27px #da5b33;
          background: #b5ac9a;
          content: '';
        }
      `}</style>
    </Tag>
  );
};

VinylRecord.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default VinylRecord;
