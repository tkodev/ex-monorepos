import React from 'react';
import style from './using-snapshots-on-component.module.css';

const MyComponent = () => (
  <div>
    <div
      className={style.myStyle}
      /* [Note on css module]
       * In application style.myStyle will be different on each build,
       * but in test is the same since we are using identity-obj-proxy */
    >
      <span>This is a component is use to check snapshots if work</span>
    </div>
  </div>
);

export default MyComponent;

