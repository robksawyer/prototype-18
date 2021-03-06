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
 * @returns
 */
export const usePaperJS = ({ ref }) => {
  const [project, setProject] = React.useState();
  useLayoutEffect(() => {
    if (!project && ref && ref.current) {
      //   const ctx = ref.current.getContext('2d');
      //   ctx.clearRect(0, 0, ref.current.width, ref.current.height);

      // Instantiate the paperScope with the canvas element
      // const _project = Paper.install(window);
      // const _project = Paper.setup(ref.current);
      const _project = new Paper.Project(ref.current);
      setProject(_project);
    }
  }, [project, ref]);

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
