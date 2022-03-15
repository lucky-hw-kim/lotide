const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it('should return drama for bestTVShowsByGenre ', () => {

    const bestTVShowsByGenre = {
      sci_fi: 'The Expanse',
      comedy: 'Brooklyn Nine-Nine',
      drama: 'The Wire'
    }
  
    assert.equal(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama')
  })

  it("should return undefine for That '70s Show", () => {

    const bestTVShowsByGenre = {
      sci_fi: 'The Expanse',
      comedy: 'Brooklyn Nine-Nine',
      drama: 'The Wire'
    }

    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
  })
})

