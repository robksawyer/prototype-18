/**
 * VinylRecord.jsx
 */
 import * as React from 'react';

 // Component(s)
 import VinylRecord from './VinylRecord';

 export default {
   title: 'VinylRecord',
   component: VinylRecord,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <VinylRecord />;

 Default.storyName = 'default';
