import React from 'react';
import ReactDom from 'react-dom';

import HandlingCssModule from './handling-css-module.js';

const portal = document.createElement('div');
portal.id = 'handling-css-module-check';
document.body.appendChild(portal);

ReactDom.render(<HandlingCssModule />, portal);

