import myObj from './es6-obj-spread.js';
import {expected_myObj} from './es6-obj-spread.js';

test('es6-spread.test: Object spread works', () => {
  expect(myObj).toEqual(expected_myObj)
})
