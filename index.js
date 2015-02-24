/*!
 * is-even <https://github.com/jonschlinkert/is-even>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isNumber = require('is-number');
var isOdd = require('is-odd');

module.exports = function isEven(i) {
  if (!isNumber(i)) {
    throw new TypeError('is-even expects a number.');
  }
  return !isOdd(i);
};
