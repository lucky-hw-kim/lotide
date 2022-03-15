const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#coutOnly', () => {
  it('should return 1 for result1.Jason', () => {
    const firstNames = [
      'Karl',
      'Salima',
      'Agouhanna',
      'Fang',
      'Kavith',
      'Jason',
      'Salima',
      'Fang',
      'Joe'
    ]

    const result1 = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false })
    assert.strictEqual(result1.Jason, 1)
  })

  it('should return 1 for result1.Karima', () => {
    const firstNames = [
      'Karl',
      'Salima',
      'Agouhanna',
      'Fang',
      'Kavith',
      'Jason',
      'Salima',
      'Fang',
      'Joe'
    ]

    const result1 = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false })
    assert.strictEqual(result1.Karima, undefined)
  })

  it('should return 1 for result1.Fang', () => {
    const firstNames = [
      'Karl',
      'Salima',
      'Agouhanna',
      'Fang',
      'Kavith',
      'Jason',
      'Salima',
      'Fang',
      'Joe'
    ]
    const result1 = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false })
    assert.strictEqual(result1.Fang, 2)
  })

  it('should return 1 for result1.Agouhanna', () => {
    const firstNames = [
      'Karl',
      'Salima',
      'Agouhanna',
      'Fang',
      'Kavith',
      'Jason',
      'Salima',
      'Fang',
      'Joe'
    ]

    const result1 = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false })
    assert.strictEqual(result1.Agouhanna, undefined)
  })
})


