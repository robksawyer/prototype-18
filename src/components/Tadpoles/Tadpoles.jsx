/**
 * @file Tadpoles.js
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import Script from 'next/script';
import Paper from 'paper';

import { usePaperJS } from '@/hooks/usePaperJS';
// import { useLayoutEffect } from '@/hooks/useIsoLayoutEffect';

import { drawing } from './drawing';

import styles from './Tadpoles.module.css';

const Tadpoles = ({
  tagName: Tag = 'canvas',
  className = 'absolute top-0 left-0 w-screen h-screen bg-black opacity-100',
  variant = 'default',
  children = '',
}) => {
  const ref = React.useRef();
  const project = usePaperJS({ ref, callback: drawing });

  if (project) {
    console.log('project', project);
  }

  return (
    <>
      <Tag
        className={`${styles.tadpoles} ${
          styles[`tadpoles__${variant}`]
        } ${className}`}
        ref={ref}
      />
      {/* {project ? (
        <Script
          id="paperjs-boid"
          type="text/paperscript"
          strategy="beforeInteractive"
          src="/js/boids.js"
          onLoad={() => {
            console.log('Loaded boid!');
          }}
        />
      ) : null} */}
    </>
  );
};

Tadpoles.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default Tadpoles;
