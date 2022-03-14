const assert = require('chai').assert;
const head = require('../head')

describe("#head", () => {
  it("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1, 2, 3]),1);
  });

  it("returns '5' for ['5']",() => {
    assert.strictEqual(head(['5']), '5')
  })

  it("returns 5 for [5, 6, 7]",() => {
    assert.strictEqual(head([5, 6, 7]), 5)
  })

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']",() => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello')
  })

  it("returns 1 for [1, 2, 3, 4]",() => {
    assert.strictEqual(head([1, 2, 3, 4]), 1)
  })

  it("returns 'a' for ['a', 'b', 'c', 'd']",() => {
    assert.strictEqual(head(['a', 'b', 'c', 'd']), 'a')
  })

  it("returns undefined for []",() => {
    assert.strictEqual(head([]), undefined)
  })

  it("returns 'c'' for ['c']",() => {
    assert.strictEqual(head(['c']), 'c')
  })

});

