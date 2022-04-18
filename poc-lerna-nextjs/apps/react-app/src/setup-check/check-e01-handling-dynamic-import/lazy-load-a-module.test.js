import lazyContent from './content-for-lazy-module.js';
import {p1, p2} from './lazy-load-a-module.js';

test('Test dynamic import 1', async (done) => {
  const content = await p1;
  expect(content).toBe(lazyContent)
  done();
});

test('Test dynamic import 2', async (done) => {
  const content = await p2;
  expect(content).toBe(lazyContent)
  done();
});
