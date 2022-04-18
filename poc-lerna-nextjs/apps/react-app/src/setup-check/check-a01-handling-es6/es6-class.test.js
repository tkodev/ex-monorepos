import MyClass from './es6-class.js';

const myClass = new MyClass();

test('es6-class.test: classProp works', () => {
  expect(myClass.getMyClassProp()).toBe('myClassProp');
});

test('es6-class.test: property initializers are not on the prototype', () => {
  expect(myClass.__proto__.getMyClassProp).toBe(void 0);
});

test('es6-class.test: staticClassProp works', () => {
  expect(MyClass.getMyStaticProp()).toBe('myStaticProp');
});
