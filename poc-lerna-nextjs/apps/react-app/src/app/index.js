import React from 'react';
import img from './react.png';
import s from './style.module.less';
import MyButton from '@myscope/ui--button';
import MyButtonBlue from '@myscope/ui--button-blue';
import message from '@myscope/util--get-message'



import FontTest from 'font-test/';
const App = () => (
  <div className={`${s.app}`}>
    <h1>Hello React</h1>
    <div><MyButton>{message()}</MyButton> </div>
    <div><MyButtonBlue>hello Blue Button</MyButtonBlue> </div>
    <div className={`${s.imageContainer}`}><img src={img} /></div>
    <FontTest />
  </div>
);

export default App;
