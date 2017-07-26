function type (obj) {
  const str = Object.prototype.toString.call(obj)
  return str.slice(8, str.length - 1)
}
type.isNumber = function (obj) {
  if (type(obj) === 'Number') {
    return true
  }
  return false
}
type.isString = function (obj) {
  if (type(obj) === 'String') {
    return true
  }
  return false
}
type.isBoolean = function (obj) {
  if (type(obj) === 'Boolean') {
    return true
  }
  return false
}
type.isNull = function (obj) {
  if (type(obj) === 'Null') {
    return true
  }
  return false
}
type.isUndefined = function (obj) {
  if (type(obj) === 'Undefined') {
    return true
  }
  return false
}
type.isObject = function (obj) {
  if (type(obj) === 'Object') {
    return true
  }
  return false
}
type.isArray = function (obj) {
  if (type(obj) === 'Array') {
    return true
  }
  return false
}

module.exports = type
