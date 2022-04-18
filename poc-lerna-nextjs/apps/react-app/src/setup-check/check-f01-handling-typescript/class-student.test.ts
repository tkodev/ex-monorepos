import Student from './class-student';
import {greeter} from './class-student';

const user = new Student("Jane", "M.", "User");
const message = greeter(user);

test('Typescript works', ()=>{
  expect(message).toBe('Hello, Jane User');
});

