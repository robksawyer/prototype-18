/**
 * Tadpoles.jsx
 */
 import * as React from 'react';

 // Component(s)
 import Tadpoles from './Tadpoles';

 export default {
   title: 'Tadpoles',
   component: Tadpoles,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <Tadpoles />;

 Default.storyName = 'default';
