/**
 * RadialRainbows.jsx
 */
 import * as React from 'react';

 // Component(s)
 import RadialRainbows from './RadialRainbows';

 export default {
   title: 'RadialRainbows',
   component: RadialRainbows,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <RadialRainbows />;

 Default.storyName = 'default';
