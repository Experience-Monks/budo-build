var minimist = require('minimist');
var writeHTML = require('./lib/writeHTML');
var writeJS = require('./lib/writeJS');

module.exports = function() {
  var argv = minimist(process.argv.slice(2));

  writeHTML(argv);
  writeJS(argv);
};