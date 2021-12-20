/**
 * YinYang.jsx
 */
 import * as React from 'react';

 // Component(s)
 import YinYang from './YinYang';

 export default {
   title: 'YinYang',
   component: YinYang,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <YinYang />;

 Default.storyName = 'default';
