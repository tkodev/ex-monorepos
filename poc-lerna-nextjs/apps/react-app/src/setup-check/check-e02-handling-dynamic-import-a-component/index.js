import React from 'react';
import ReactDom from 'react-dom';

import LazyLoadAComponent from './lazy-load-a-component.js';

const portal = document.createElement('div');
portal.className = 'portal';
document.body.appendChild(portal);

ReactDom.render(<LazyLoadAComponent />, portal);
