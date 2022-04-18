// next.config.js
const withTM = require('next-transpile-modules')([
  // pass the modules you would like to see transpiled
  '@myscope/ui--button',
  '@myscope/ui--button-blue',
  '@myscope/util--get-message'
]);

module.exports = withTM();
