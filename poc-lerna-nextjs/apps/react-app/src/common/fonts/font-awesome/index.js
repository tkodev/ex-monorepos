const thisNeverRun = () => {
  // This never run, but to trick webpack into loading font
  const pathToFont = './fonts/';
  require(`${pathToFont}`);
}
require('./font-awesome.css');
