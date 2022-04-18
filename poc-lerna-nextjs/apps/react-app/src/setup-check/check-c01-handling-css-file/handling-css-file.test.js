import styleMock from './style-mock.js'

import importedCssFilefrom from './handling-css-file.js';

test('handling-css-file.test: Jest handle css file', ()=>{
  expect(importedCssFilefrom).toEqual(styleMock);
})
