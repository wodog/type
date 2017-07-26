const type = require('../')
const assert = require('assert')

describe('get type', function () {
  it('should return Number', function () {
    assert.strictEqual('Number', type(1))
    assert.strictEqual('Number', type(NaN))
    assert.strictEqual('Number', type(Number()))
  })
  it('should return String', function () {
    assert.strictEqual('String', type(''))
    assert.strictEqual('String', type(String()))
  })
  it('should return Boolean', function () {
    assert.strictEqual('Boolean', type(true))
    assert.strictEqual('Boolean', type(Boolean()))
  })
  it('should return Null', function () {
    assert.strictEqual('Null', type(null))
  })
  it('should return Undefined', function () {
    assert.strictEqual('Undefined', type(undefined))
  })
  it('should return Object', function () {
    assert.strictEqual('Object', type({}))
  })
  it('should return Array', function () {
    assert.strictEqual('Array', type([]))
  })
})
describe('detect type', function () {
  it('should be Number', function () {
    assert(type.isNumber(1))
  })
  it('should be String', function () {
    assert(type.isString(''))
  })
  it('should be Boolean', function () {
    assert(type.isBoolean(true))
  })
  it('should be Null', function () {
    assert(type.isNull(null))
  })
  it('should be Undefined', function () {
    assert(type.isUndefined(undefined))
  })
  it('should be Object', function () {
    assert(type.isObject({}))
  })
  it('should be Array', function () {
    assert(type.isArray([]))
  })
})
