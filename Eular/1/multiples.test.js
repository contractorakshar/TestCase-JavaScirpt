

var assert = require('assert');
var multiples = require('./multiples');

describe('Multiples of 3 and 5', function () {
    it('should sum of all the multiples of 3 or 5 below 1000', function () {
        assert.strictEqual(multiples(), 233168);
    });
});

// cmd> mocha Eular/1/multiples.test.js

// Output
// Multiples of 3 and 5
// √ should sum of all the multiples of 3 or 5 below 1000
// √ should not null
// √ should not undefined
// 1 passing (10ms)