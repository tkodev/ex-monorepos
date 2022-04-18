import React from 'react';
import ReactDom from 'react-dom';

test('jsDom works', ()=>{
  const nodeString = 'My React Component';
  const div = document.createElement('div');

  ReactDom.render(<div>{nodeString}</div>, div);
  expect(div.innerHTML).toBe(`<div>${nodeString}</div>`);
})
