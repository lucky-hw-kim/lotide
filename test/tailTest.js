const tail = require('../tail')
const assert = require('chai').assert

describe('#tail', () => {
  it("should return ['Lighthouse', 'Labs'] for result", () => {
    const result = tail(['Hello', 'Lighthouse', 'Labs'])
    assert.deepEqual(result, ['Lighthouse', 'Labs'])
  })

  it("should return 2 for result.length", () => {
    const result = tail(['Hello', 'Lighthouse', 'Labs'])
    assert.equal(result.length, 2)
  })

  it("should return 2 for result.length", () => {
    const result = tail(['Hello', 'Lighthouse', 'Labs'])
    assert.equal(result[0], 'Lighthouse')
  })

  it("should return 2 for result.length", () => {
    const result = tail(['Hello', 'Lighthouse', 'Labs'])
    assert.equal(result[1], 'Labs')
  })

  it("should return ['Lighthouse', 'Labs'] for result", () => {
    const result = tail(['Yo Yo', 'Lighthouse', 'Labs']);
    assert.deepEqual(result, ['Lighthouse', 'Labs'])
  })

  it("should return 3 for words.length", () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    const result = tail(['Yo Yo', 'Lighthouse', 'Labs']);
    assert.deepEqual(words.length, 3)
  })

});

