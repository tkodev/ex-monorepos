import React from 'react';
import lazyContent from './content-for-lazy-module.js';

const MyComponent = () => <div className="component-to-lazy-load">{lazyContent}</div>;
export default MyComponent;
