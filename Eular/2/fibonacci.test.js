var assert = require('assert');
var fibonacci = require('./fibonacci');

describe('Fibonacci sequence whose values do not exceed four million', function () {
    it('should sum of the even-valued terms', function () {
        assert.strictEqual(fibonacci(), 4613732);
    });
    it('should not null', function () {
        assert.notStrictEqual(fibonacci(), null);
    });
    it('should not undefined', function () {
        assert.notStrictEqual(fibonacci(), undefined);
    });
});

// Output
// Fibonacci sequence whose values do not exceed four million
// √ should sum of the even-valued terms
// √ should not null
// √ should not undefined
// 1 passing (10ms)