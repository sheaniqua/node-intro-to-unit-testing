const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

//unit tests for fizzBuzzer function

describe('fizzBuzzer', function(){
  //test the normal case
  it('should say fizzBuzz on multiples of 15', function() {
    [15, 30, 45].forEach(function(input) {
      fizzBuzzer(input).should.equal('fizzBuzz');
    });
  });

  it('should say buzz on multiples of 5', function() {
    [5, 10, 20].forEach(function(input) {
      fizzBuzzer(input).should.equal('buzz');
    });
  });

  it('should say fizz on multiples of 3', function() {
    [3,6,9,12].forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz');
    });
  });

  it('should return a number if not a multiple of 3 or 5', function() {
    [1,2,4,7,8,11].forEach(function(input) {
      fizzBuzzer(input).should.equal(input);
    });
  });



  it('should return an error if not a number', function() {
    [true, false, 'cat', function() {}, [1,2,3], null].forEach(function(input) {
      (function() {
        fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});
