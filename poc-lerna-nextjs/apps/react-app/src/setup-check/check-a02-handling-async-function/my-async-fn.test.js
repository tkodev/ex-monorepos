import myAsyncFunction from  './my-async-fn.js';
import {dataFromAsyncFn} from './my-async-fn.js';

test('test myAsyncFunction', done => {
  myAsyncFunction().then((data)=>{
    expect(data).toBe(dataFromAsyncFn);
    done();
  });
});
