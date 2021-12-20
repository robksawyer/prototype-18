/**
 * @file ScenePaperJS.js
 */
import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './ScenePaperJS.module.css';

import { usePaperJS } from '@/hooks/usePaperJS';
import { useLayoutEffect } from '@/hooks/useIsoLayoutEffect';

const ScenePaperJS = ({
  tagName: Tag = 'canvas',
  className = 'absolute top-0 left-0 w-screen h-screen bg-black opacity-100',
  variant = 'default',
}) => {
  const ref = React.useRef();
  const project = usePaperJS({ ref });

  // Setup PaperJS
  useLayoutEffect(() => {
    if (project) {
      console.log('project', project);
      const { view } = project;
      console.log('view', view);

      view.onFrame = ({ delta, time, count }) => {
        console.log('tick', count);
      };

      view.onResize = event => {
        console.log('event', event);
      };
    }
  }, [project]);

  return (
    <Tag
      className={`${styles.scene_paper_j_s} ${
        styles[`scene_paper_j_s__${variant}`]
      } ${className}`}
      ref={ref}
    />
  );
};

ScenePaperJS.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
};

export default ScenePaperJS;
