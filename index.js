'use strict';

var path = require('path')
, basename = path.basename(path.dirname(__filename))
, debug = require('debug')('mill:contrib:' + basename)
, PassThrough = require("stream").PassThrough
;

module.exports = function (options, si) {
  var cmd = new PassThrough();
  return si.pipe(cmd);
}
