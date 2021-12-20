/**
 * ScenePaperJS.jsx
 */
 import * as React from 'react';

 // Component(s)
 import ScenePaperJS from './ScenePaperJS';

 export default {
   title: 'ScenePaperJS',
   component: ScenePaperJS,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <ScenePaperJS />;

 Default.storyName = 'default';
