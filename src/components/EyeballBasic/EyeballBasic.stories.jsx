/**
 * EyeballBasic.jsx
 */
 import * as React from 'react';

 // Component(s)
 import EyeballBasic from './EyeballBasic';

 export default {
   title: 'EyeballBasic',
   component: EyeballBasic,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <EyeballBasic />;

 Default.storyName = 'default';
