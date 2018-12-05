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

 
  it('should return "buzz" for multiples of 5', function() {
    [5, 10, 20].forEach(function(input) {
      expect(fizzBuzz(input)).to.equal('buzz');
    });
  });


  it('should return "fizz" for multiples of 3', function() {
    [6, 9, 12].forEach(function(input) {
      expect(fizzBuzz(input)).to.equal('fizz');
    });
  });

  it('should return number if not multiple of 3 or 5', function() {
    [1, 7, 4].forEach(function(input) {
      expect(fizzBuzz(input)).to.equal(input);
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