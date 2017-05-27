/*!
 * is-even <https://github.com/jonschlinkert/is-even>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var isEven = require('./');
require('should');

describe('isEven', function() {

  it('should return true if the number is odd:', function() {
    isEven(0).should.be.true;
    isEven(1).should.be.false;
    isEven(2).should.be.true;
    isEven(3).should.be.false;
  });

  it('should work with strings:', function() {
    isEven('0').should.be.true;
    isEven('1').should.be.false;
    isEven('2').should.be.true;
    isEven('3').should.be.false;
  });

  it('should throw an error on bad args:', function() {
    (function() {
      isEven();
    }).should.throw(/expects a number\.$/);
  });

  it('should throw an error on non-integer args:', function() {
    (function() {
      isEven('1.1e0');
    }).should.throw(/expects an integer\.$/);
  });

});
