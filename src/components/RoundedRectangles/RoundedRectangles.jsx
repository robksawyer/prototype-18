/**
 * @file RoundedRectangles.js
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from 'paper';

import styles from './RoundedRectangles.module.css';

import { usePaperJS } from '@/hooks/usePaperJS';
import { useLayoutEffect } from '@/hooks/useIsoLayoutEffect';

const RoundedRectangles = ({
  tagName: Tag = 'canvas',
  className = 'absolute top-0 left-0 w-screen h-screen bg-black opacity-100',
  variant = 'default',
  children = '',
}) => {
  const ref = React.useRef();
  const project = usePaperJS({ ref });

  // Setup PaperJS
  useLayoutEffect(() => {
    if (project) {
      const { view } = project;

      const { Path, Rectangle, Point } = Paper;

      var mousePoint = view.center;
      var amount = 25;
      var colors = ['red', 'white', 'blue', 'white'];

      for (var i = 0; i < amount; i++) {
        var rect = new Rectangle([0, 0], [25, 25]);
        rect.center = mousePoint;
        var path = new Path.Rectangle(rect, 6);
        path.fillColor = colors[i % 4];
        var scale = (1 - i / amount) * 20;
        path.scale(scale);
      }

      var children = project.activeLayer.children;

      view.onFrame = ({ time, count }) => {
        for (var i = 0, l = children.length; i < l; i++) {
          var item = children[i];
          const p0 = new Point(mousePoint);
          const p1 = new Point(item.position);
          const tPoint = new Point({
            x: p0.x - p1.x,
            y: p0.y - p1.y,
          });
          var delta = new Point({
            x: tPoint.x / (i + 5),
            y: tPoint.y / (i + 5),
          });
          item.rotate(Math.sin((count + i) / 10) * 7);
          if (delta.length > 0.1) {
            const tPos = new Point({
              x: p1.x + delta.x,
              y: p1.y + delta.y,
            });
            item.position = tPos;
          }
        }
      };

      view.onMouseMove = ({ point }) => {
        mousePoint = new Point(point);
      };

      view.onResize = event => {
        console.log('event', event);
      };
    }
  }, [project]);

  return (
    <Tag
      className={`${styles.rounded_rectangles} ${
        styles[`rounded_rectangles__${variant}`]
      } ${className}`}
      ref={ref}
    >
      {children}
    </Tag>
  );
};

RoundedRectangles.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default RoundedRectangles;
