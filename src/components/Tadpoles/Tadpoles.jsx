/**
 * @file Tadpoles.js
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from 'paper';

import { usePaperJS } from '@/hooks/usePaperJS';
import { useLayoutEffect } from '@/hooks/useIsoLayoutEffect';

import { Boid } from './Boid';

import styles from './Tadpoles.module.css';

const Tadpoles = ({
  tagName: Tag = 'canvas',
  className = 'absolute top-0 left-0 w-screen h-screen bg-black opacity-100',
  variant = 'default',
  children = '',
}) => {
  const ref = React.useRef();
  const project = usePaperJS({ ref });

  const { Base, Path, Point, Shape, PaperScript } = Paper;

  // Setup PaperJS
  useLayoutEffect(() => {
    if (project) {
      const { view } = project;
      console.log('project', project);
      project.initialize(ref.current);
      const { Base, Path, Point, Shape, PaperScript } = Paper;

      console.log('PaperScript', PaperScript);
      console.log('project._scope.execute', project._scope);
      // const Boid = project._scope.execute(BoidScript);

      const heartPath = new Path(
        'M514.69629,624.70313c-7.10205,-27.02441 -17.2373,-52.39453 -30.40576,-76.10059c-13.17383,-23.70703 -38.65137,-60.52246 -76.44434,-110.45801c-27.71631,-36.64355 -44.78174,-59.89355 -51.19189,-69.74414c-10.5376,-16.02979 -18.15527,-30.74951 -22.84717,-44.14893c-4.69727,-13.39893 -7.04297,-26.97021 -7.04297,-40.71289c0,-25.42432 8.47119,-46.72559 25.42383,-63.90381c16.94775,-17.17871 37.90527,-25.76758 62.87354,-25.76758c25.19287,0 47.06885,8.93262 65.62158,26.79834c13.96826,13.28662 25.30615,33.10059 34.01318,59.4375c7.55859,-25.88037 18.20898,-45.57666 31.95215,-59.09424c19.00879,-18.32178 40.99707,-27.48535 65.96484,-27.48535c24.7373,0 45.69531,8.53564 62.87305,25.5957c17.17871,17.06592 25.76855,37.39551 25.76855,60.98389c0,20.61377 -5.04102,42.08691 -15.11719,64.41895c-10.08203,22.33203 -29.54687,51.59521 -58.40723,87.78271c-37.56738,47.41211 -64.93457,86.35352 -82.11328,116.8125c-13.51758,24.0498 -23.82422,49.24902 -30.9209,75.58594z',
      );

      var boids = [];
      var groupTogether = false;

      // Add the boids:
      for (var i = 0; i < 30; i++) {
        var position = Point.random() * view.size;
        boids.push(new Boid(view, position, 10, 0.05, groupTogether));
      }

      view.onMouseDown = event => {
        groupTogether = !groupTogether;
      };

      view.onKeyDown = ({ key }) => {
        if (key == 'space') {
          var layer = project.activeLayer;
          layer.selected = !layer.selected;
          return false;
        }
      };

      view.onFrame = ({ delta, time, count }) => {
        for (var i = 0, l = boids.length; i < l; i++) {
          if (groupTogether) {
            var length = (((i + count / 30) % l) / l) * heartPath.length;
            var point = heartPath.getPointAt(length);
            if (point) boids[i].arrive(point);
          }
          boids[i].run(boids);
        }
      };

      view.onResize = event => {
        // Reposition the path whenever the window is resized
        heartPath.fitBounds(view.bounds);
        heartPath.scale(0.8);
      };
    }
  }, [project]);

  return (
    <Tag
      className={`${styles.tadpoles} ${
        styles[`tadpoles__${variant}`]
      } ${className}`}
      ref={ref}
    />
  );
};

Tadpoles.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default Tadpoles;
