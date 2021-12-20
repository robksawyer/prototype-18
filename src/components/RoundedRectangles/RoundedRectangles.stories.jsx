/**
 * RoundedRectangles.jsx
 */
 import * as React from 'react';

 // Component(s)
 import RoundedRectangles from './RoundedRectangles';

 export default {
   title: 'RoundedRectangles',
   component: RoundedRectangles,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <RoundedRectangles />;

 Default.storyName = 'default';
