import * as React from 'react';

export const useInterval = (callback, delay) => {
  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null && delay > 0) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
