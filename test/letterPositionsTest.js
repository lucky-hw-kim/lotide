const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPosition', ()=> {
  it('should return [1] for ("hello","e") ', () => {
    assert.deepEqual(letterPositions("hello").e, [1])
  } )

  it('should return [9, 16, 22] for ("lighthouse in the house","e")', () => {
    assert.deepEqual(letterPositions('lighthouse in the house').e, [9, 16, 22])
  } )
})


