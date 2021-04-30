var assert = require('assert');
var smallestMult = require('./smallestMult');

describe('smallest positive number', function () {
    it('should is evenly divisible by all of the numbers from 1 to 20', function () {
        assert.strictEqual(smallestMult(), 232792560);
    });
});

// cmd> mocha Eular/5/smallestMult.test.js

// smallest positive number
// √ should is evenly divisible by all of the numbers from 1 to 20 (105ms)
// 1 passing (113ms)