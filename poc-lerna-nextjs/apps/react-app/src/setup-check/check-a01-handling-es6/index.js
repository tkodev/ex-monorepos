
console.log('-------------- [start] Check ES6 Class');
  import MyClass from './es6-class.js';
  import {staticPropValue, classPropValue} from './es6-class.js';

  const myClass = new MyClass();
  console.log('ES6 Class static property works: ', MyClass.getMyStaticProp() === staticPropValue);
  console.log('ES6 Class property works: ', myClass.getMyClassProp() === classPropValue);
  console.log('ES6 Class property initializers are not on the prototype: ', myClass.__proto__.getMyClassProp === void 0);
console.log('-------------- [done] Check ES6 Class');



console.log('-------------- [start] Check ES6 Spread');
  import myObj from './es6-obj-spread.js';
  import {expected_myObj} from './es6-obj-spread.js';
  console.log('ES6 spread works: ', JSON.stringify(myObj) === JSON.stringify(expected_myObj));
console.log('-------------- [done] Check ES6 Spread');


console.log('-------------- [start] Check polyfill');
  const testPolyFill = [1,2].includes(1);
  console.log('polyFill in browser works: ', testPolyFill);
console.log('-------------- [done] Check polyfill');

