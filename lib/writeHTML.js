var html = require('simple-html-index');
var hyperstream = require('hyperstream');
var fs = require('fs');

module.exports = function(argv) {
  html()
  .pipe(hyperstream({
    body: {
      _appendHtml: '<script type="text/javascript" src="bundle.js"></script>'
    }
  }))
  .pipe(fs.createWriteStream('index.html'));
};