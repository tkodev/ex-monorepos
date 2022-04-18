import {render} from '@testing-library/react';
import React from 'react';
import MyComponentWithCssModule from './handling-css-module.js';

test('It handle css module with identity-obj-proxy check', ()=>{
  const {container} = render(<MyComponentWithCssModule />);
  expect(container.innerHTML).toMatch('classNameOfMyComponentWithCssModule');
});
