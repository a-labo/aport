/**
 * Find freeport with promise
 * @module aport
 */

'use strict'

const aport = require('./aport')

const lib = aport.bind(this)

Object.assign(lib, aport, {
  aport
})

module.exports = lib
