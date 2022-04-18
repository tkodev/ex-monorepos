import {getMyData} from './using-snapshots';

test('Using Snapshots',  ()=>{
  const myData = getMyData();
  expect(myData).toMatchSnapshot();
});

