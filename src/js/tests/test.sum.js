var config  = require('should')
  , sum     = require( '../sum' );

describe('sum.js', function() {
  it('sum of 2 + 3 should return 5', function() {
    sum(2, 3).should.be.equal(5);
  });

  it('sum of 30 + 30 should return 60', function() {
    sum(30, 30).should.be.equal(60);
  });
});
