// import chai, declare expect variable
const expect = require('chai').expect;

// import fizbuzz
const fizzBuzz = require('../fizzBuzzer');

// unit tests for our `fizzBuzz` function
describe('fizzBuzz', function() {

  it('should return "fizz-buzz" for multiples of 15', function() {
    [15, 30, 45].forEach(function(input) {
      expect(fizzBuzz(input)).to.equal('fizz-buzz');
    });
  });

  it('should return "fizz-buzz" for multiples of 5', function() {
    [15, 30, 45].forEach(function(input) {
      expect(fizzBuzz(input)).to.equal('fizz-buzz');
    });
  });

  it('should return "fizz-buzz" for multiples of 5', function() {
    [15, 30, 45].forEach(function(input) {
      expect(fizzBuzz(input)).to.equal('fizz-buzz');
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzz(input[0]);
      }).to.throw(Error);
    });
  });
});