var assert = require('assert');
const mul = require('./fucntion_Add');
const prime =require('./isprime');
const diff=require('./euler_6');
describe('Euler Problem 1', function() {
    it('mul of 3 or 5', function() {
    
        console.log(mul());
      assert.equal(mul(),233168);
    //   assert.notEqual(mul(),undefined);

  });
});

describe('Euler Problem 3', function() {
  it('biggest prime of 13195 is 29', function() {
    
  assert.equal(prime(),29);
  });
});

describe('Euler Problem 5', function() {
  it('Sum of diiference of 100 natural number', function() {
    
  assert.equal(diff(100),25164150);
  });
});
