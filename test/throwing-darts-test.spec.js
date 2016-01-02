var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var scoreThrows = require('../scoreThrows');

describe('scoreThrows', function() {

  var scoreThrowsTest;

  it('should be a function', function() {
    expect(scoreThrows).to.be.a('function');
  });
});