var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      //assert.equal is deprecated so assert.strictEqual is used in new version
      assert.strictEqual([1, 2, 3].indexOf(100), 1, 'Value Not Found');
    });
  });
}); 