var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(7), -1);
    });
  });
}); 
/*
  Array
    #indexOf()
      ✓ should return -1 when the value is not present


  1 passing

*/
describe('Variable', function() {
  describe('const and let', function() {
    it('should return error if value assign to const ', function() {
      const a=5;
      let b=4;
      assert.strictEqual(a=7, 'type error');
      assert.strictEqual(b=7, 'assigned no error');
    });
  });
}); 