/**
 * @file usePaperJS
 * Helper to initial PaperJS
 */
import * as React from 'react';
import Paper from 'paper';
import { useLayoutEffect } from '@/hooks/useIsoLayoutEffect';

/**
 *
 * @param {object} ref is a reference to the PaperJS canvas
 * @param {function} callback is a drawing function (PaperJS script)
 * @returns
 */
export const usePaperJS = ({ ref, callback }) => {
  const [project, setProject] = React.useState();

  useLayoutEffect(() => {
    if (!project && ref && ref.current) {
      const canvas = ref.current;

      Paper.install(window);

      // Setup the canvas
      Paper.setup(canvas);

      callback();
    }
  }, [project, callback, ref]);

  return project;
};

/**
 * EXAMPLE USAGE:
 */
// import { usePaperJS } from '@/hooks/usePaperJS';
// import { useWindowSize } from '@/hooks/useWindowSize';

// const App = () => {
//   const ref = React.useRef();
//   const project = usePaperJS({ ref });
//   const { height, width } = useWindowSize();

//   return (
//     <canvas
//       ref={ref}
//       width={width}
//       height={height}
//     />
//   )
// }
