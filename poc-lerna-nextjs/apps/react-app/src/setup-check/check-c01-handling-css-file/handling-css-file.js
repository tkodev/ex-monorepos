import style from './handling-css-file.css';

const text ='This text is styled by ".some-class-in-import-css", and its color is blue';
const container = document.createElement('div');
const textNode = document.createTextNode(text);
container.className='some-class-in-import-css';
container.appendChild(textNode);
document.body.appendChild(container);

