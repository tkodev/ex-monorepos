import {render} from '@testing-library/react';
import React from 'react';
import MyComponent from './using-snapshots-on-component';

test('Using Snapshots on component.innerHTML',  ()=>{
  const {container} = render(<MyComponent />);
  expect(container.innerHTML).toMatchSnapshot();
});

test('Using Snapshots on component.firstChild',  ()=>{
  const {container} = render(<MyComponent />);
  expect(container.firstChild).toMatchSnapshot();
});


