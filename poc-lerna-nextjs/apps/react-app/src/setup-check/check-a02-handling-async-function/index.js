import myAsyncFunction from './my-async-fn.js';
import {dataFromAsyncFn} from './my-async-fn.js';

myAsyncFunction().then(
  data=>{
    console.log('AsyncFunction Work:', data === dataFromAsyncFn);
  }
);
