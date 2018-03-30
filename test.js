/*!
 * is-even <https://github.com/jonschlinkert/is-even>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

require('mocha');
var assert = require('assert');
var isEven = require('./');

describe('isEven', function() {
  it('should return true if the number is even:', function() {
    assert(isEven(0));
    assert(!isEven(1));
    assert(isEven(2));
    assert(!isEven(3));
  });

  it('should work with strings:', function() {
    assert(isEven('0'));
    assert(!isEven('1'));
    assert(isEven('2'));
    assert(!isEven('3'));
  });

  it('should throw an error on bad args:', function() {
    assert.throws(function() {
      isEven();
    }, /expects a number\.$/);
  });

  it('should throw an error on non-integer args:', function() {
    assert.throws(function() {
      isEven('1.1e0');
    }, /expects an integer\.$/);
  });
});
