import React from 'react';
import ReactDom from 'react-dom';

import {render} from '@testing-library/react';
import loadable from 'react-loadable';  // <--- [!]

import LazyLoadAComponent from './lazy-load-a-component.js';
// import {promise} from './lazy-load-a-component.js';

test('lazy load a component (imrpoved)', async done => {

  const {container:beforeLoad, debug} = render(<LazyLoadAComponent />);
  //debug(beforeLoad.firstChild)

  expect(beforeLoad.firstChild).toMatchSnapshot();

  //await promise;
  await loadable.preloadAll(); // <--- [!]

  const {container:afterLoad} = render(<LazyLoadAComponent />);
  // debug(afterLoad.firstChild)

  expect(afterLoad.firstChild).toMatchSnapshot();

  done();
})



