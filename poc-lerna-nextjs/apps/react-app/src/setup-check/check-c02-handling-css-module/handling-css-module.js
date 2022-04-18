import React from 'react';
import style from './handling-css-module.module.css';

const MyComponentWithCssModule = () => (
  <div>
    <hr />
    <div className={style.classNameOfMyComponentWithCssModule} >
      <span> This is a component using css module. The imported css module is an object looks like: </span>
      <code><pre>
        {JSON.stringify(style, null, 2)}
      </pre></code>
    </div>
  </div>
);

export default MyComponentWithCssModule;

