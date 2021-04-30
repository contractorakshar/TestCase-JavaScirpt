var assert = require('assert');
var palindrome = require('./palindrome');

describe('palindrome', function () {
    it('should largest palindrome made from the product of two 3-digit numbers', function () {
        assert.strictEqual(palindrome(), 906609);
    });
    it('should not null', function () {
        assert.notStrictEqual(palindrome(), null);
    });
    it('should not undefined', function () {
        assert.notStrictEqual(palindrome(), undefined);
    });
});

// cmd> mocha Eular/4/palindrome.test.js 

// Output:

// palindrome
// √ should largest palindrome made from the product of two 3-digit numbers (564ms)
// √ should not null (576ms)
// √ should not undefined (583ms)


// 3 passing (2s)