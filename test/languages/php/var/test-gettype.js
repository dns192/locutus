// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
XMLHttpRequest = {} // eslint-disable-line no-native-reassign
window = { // eslint-disable-line no-native-reassign
  window: {},
  document: {
    lastModified: 1388954399,
    getElementsByTagName: function () { return [] }
  },
  location: {
    href: ""
  }
}
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var gettype = require('/Users/kvz/code/phpjs/src/php/var/gettype.js')

describe('php.var.gettype.js', function () {
  it('should pass example 1', function (done) {
    gettype(1)
    var expected = 'integer'
    var result = gettype(1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    gettype(undefined)
    var expected = 'undefined'
    var result = gettype(undefined)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    gettype({0: 'Kevin van Zonneveld'})
    var expected = 'object'
    var result = gettype({0: 'Kevin van Zonneveld'})
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    gettype('foo')
    var expected = 'string'
    var result = gettype('foo')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    gettype({0: function () {return false;}})
    var expected = 'object'
    var result = gettype({0: function () {return false;}})
    expect(result).to.deep.equal(expected)
    done()
  })
  it.skip('should pass example 6', function (done) {
    gettype({0: 'test', length: 1, splice: function () {}})
    gettype(['test'])
    var expected = 'object'
'array'
gettype({0: 'test', length: 1, splice: function () {}})
    var result = gettype(['test'])
    expect(result).to.deep.equal(expected)
    done()
  })
})