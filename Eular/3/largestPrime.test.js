// cmd> mocha Eular/3/largestPrime.test.js

var assert = require('assert');
var largestPrime = require('./largestPrime');

describe('LargestPrime', function () {
    it('should the largest prime factor of the number 600851475143', function () {
        assert.strictEqual(largestPrime(), 6857);
    });
});

//cmd> mocha Eular/3/largestPrime.test.js

// LargestPrime
// √ should the largest prime factor of the number 600851475143
// √ should not null
// √ should not undefined


// 3 passing (18ms)