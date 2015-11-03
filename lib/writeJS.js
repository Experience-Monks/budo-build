var browserify = require('browserify');
var uglifyjs = require('uglifyjs');
var fs = require('fs');
var path = require('path');
var concatStream = require('concat-stream');

module.exports = function(argv) {
  var b = browserify();
  var concat = concatStream(function(source) {
    
    var result = uglifyjs.minify(source.toString(), {
      fromString: true,
      mangle: true
    });

    fs.writeFile(path.join(process.cwd(), 'bundle.js'), result.code, 'utf8', function(err) {
      if(err) {
        throw err;
      }
    });
  });

  b.add('index.js');

  return b
  .bundle()
  .pipe(concat);
};