// "red-green-refactor"
// red: write a test and see it fail.
// green: write just enough production code to make the test pass.
// refactor.

const { expect } = require('chai')

const add = require('../add')

describe('add', function () {
  it('returns 0 for the empty string', function () {
    let result = add('')
    expect(result).to.equal(0)
  })

  it('returns 1 for the string "1"', function () {
    let result = add('1')
    expect(result).to.equal(1)
  })

  it('returns 3 for the string "1,2"', function () {
    let result = add('1,2')
    expect(result).to.equal(3)
  })

  it('returns 6 for the string "1,2,3"', function () {
    expect(add('1,2,3')).to.equal(6)
  })
})
