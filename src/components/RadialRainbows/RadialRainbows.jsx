/**
 * @file RadialRainbows.js
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from 'paper';

import styles from './RadialRainbows.module.css';

import { usePaperJS } from '@/hooks/usePaperJS';
import { useLayoutEffect } from '@/hooks/useIsoLayoutEffect';

const RadialRainbows = ({
  tagName: Tag = 'canvas',
  className = 'absolute top-0 left-0 w-screen h-screen',
  variant = 'default',
  children = '',
}) => {
  const ref = React.useRef();
  const project = usePaperJS({ ref });

  useLayoutEffect(() => {
    if (project) {
      const { view } = project;
      const { Point, Path } = Paper;

      var point = view.center;

      var colors = [];
      var cycles = 4;

      // Generate some rainbow colors
      for (var i = 0, l = 60; i < l; i++) {
        var brightness = 1 - (i / l) * 1.5;
        var hue = (i / l) * cycles * 360;
        var color = {
          hue: hue,
          saturation: 1,
          brightness: brightness,
        };
        colors.push(color);
      }

      var radius = Math.max(view.size.width, view.size.height) * 0.75;

      var path = new Path.Rectangle({
        rectangle: view.bounds,
        fillColor: {
          origin: point,
          destination: new Point(point.x + radius, 0),
          gradient: {
            stops: [
              ['white', 0],
              ['white', 0.05],
              ['white', 0.07],
              ...colors.splice(0, 5),
              ['black', 0.95],
              ['black', 0.2],
              ['black', 1],
            ],
            radial: true,
          },
        },
      });

      var color = path.fillColor;
      var gradient = color.gradient;
      var mouseDown = false;
      var mousePoint = view.center;

      var grow = false;
      var vector = new Point(150, 0);

      view.onMouseDown = event => {
        mouseDown = true;
        mousePoint = event.point;
      };

      view.onMouseDrag = event => {
        mousePoint = event.point;
      };

      view.onMouseUp = event => {
        vector.length = 10;
        mouseDown = false;
      };

      view.onFrame = ({ delta, time, count }) => {
        for (var i = 0, l = gradient.stops.length; i < l; i++) {
          gradient.stops[i].color.hue -= 20;
        }

        if (grow && vector.length > 300) {
          grow = false;
        } else if (!grow && vector.length < 75) {
          grow = true;
        }

        if (mouseDown) {
          point.x = point.x + (mousePoint.x - point.x) / 10;
          point.y = point.y + (mousePoint.y - point.y) / 10;
        } else {
          vector.length += grow ? 1 : -1;
          vector.angle += 5;
        }
        color.highlight = mouseDown
          ? point
          : new Point({ x: point.x + vector.x, y: point.y + vector.y });
      };

      view.onResize = event => {
        point = view.center;
        path.bounds = view.bounds;
        var color = path.fillColor;
        color.origin = point;
        var radius = Math.max(view.size.width, view.size.height) * 0.75;
        color.destination = new Point(point.x + radius, 0);

        // paper.project._needsUpdate = true;
        // paper.project.view.update();
      };
    }
  }, [project]);

  return (
    <Tag
      className={`${styles.radial_rainbows} ${
        styles[`radial_rainbows__${variant}`]
      } ${className}`}
      ref={ref}
      data-paper-resize="true"
    >
      {children}
    </Tag>
  );
};

RadialRainbows.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default RadialRainbows;
