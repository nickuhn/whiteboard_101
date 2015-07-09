var arrayFunctions = require('../arrayFunctions');
var expect = require('chai').expect;

describe('arrayFunctions', function(){
  describe('#shifty', function(){
    it('should return 1 when passed [1, 2, 3, 4]', function(){
      expect(arrayFunctions.shifty([1, 2, 3, 4])).to.deep.equal(1);
    });
  });
  describe('#unshifty', function(){
    it('should add the variable passed to the front of the array', function(){
      var array = [2, 3, 4];
      expect(arrayFunctions.unshifty(array, 1)).to.deep.equal([1, 2, 3, 4])
    });
  });
    describe('#popy', function(){
    it('should return 4 when passed [1, 2, 3, 4]', function(){
      expect(arrayFunctions.popy([1, 2, 3, 4])).to.deep.equal(4);
    });
  });
  describe('#pushy', function(){
    it('should add the variable passed to the end of the array', function(){
      var array = [1, 2, 3];
      expect(arrayFunctions.pushy(array, 4)).to.deep.equal([1, 2, 3, 4])
    });
  });
  describe('#findDuplicates', function(){
    it('should return true if duplicates exist false if they don\'t', function(){
      expect(arrayFunctions.findDuplicates([1,2,1])).to.deep.equal(true);
    });
  });
  describe('#deduplicate', function(){
    it('should return an array with duplicates removed', function(){
      expect(arrayFunctions.deduplicate([1,1,2,3])).to.deep.equal([1,2,3]);
    });
  });
  describe('#commonStartingLetter', function(){
    it('should return the most common starting letter words in the array', function(){
      expect(arrayFunctions.commonStartingLetter(['everything', 'in', 'here', 'is', 'a', 'string'])).to.deep.equal('i');
    });
  });
  describe('#commonLetter', function(){
    it('should return the most common letter in the array', function(){
      expect(arrayFunctions.commonLetter(['everything', 'in', 'here', 'is', 'a', 'string'])).to.deep.equal(['a', 'e']);
    });
  });
});
